'use client';

import { useState } from 'react';
import { Alert } from './alert';
import { Card } from './card';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            
            const res = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            if (res.ok) {
                setStatus('ok');
                event.target.reset(); // フォームをクリア
            } else {
                setStatus('error');
                setError(`送信に失敗しました`);
            }
        } catch (e) {
            setStatus('error');
            setError(`エラーが発生しました: ${e}`);
        }
    };

    return (
        <div className="w-full md:max-w-md">
            <Card title="お問い合わせ">
                <form 
                    name="contact" 
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleFormSubmit} 
                    className="flex flex-col gap-3 align-center"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input name="name" type="text" placeholder="名前" required className="input" />
                    <input name="email" type="email" placeholder="メールアドレス" className="input" />
                    <textarea 
                        name="message" 
                        placeholder="メッセージ" 
                        required 
                        className="input" 
                        rows="4"
                    ></textarea>
                    <button className="btn" type="submit">
                        送信
                    </button>
                    {status === 'ok' && <Alert type="success">送信しました!</Alert>}
                    {status === 'error' && <Alert type="error">{error}</Alert>}
                </form>
            </Card>
        </div>
    );
}
