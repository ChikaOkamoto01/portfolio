'use client';

import { useState } from 'react';
import { Alert } from './alert';
import { Card } from './card';
import { SubmitButton } from './submit-button';

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
            
            console.log('送信開始:', formData); // デバッグ用

            const res = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            
            console.log('送信結果:', res); // デバッグ用

            if (res.ok) {
                setStatus('ok');
                event.target.reset(); // フォームをクリア
                console.log('送信成功'); // デバッグ用
            } else {
                setStatus('error');
                setError(`送信に失敗しました`);
                console.error('送信エラー:', res.status, res.statusText); // デバッグ用
            }
        } catch (e) {
            console.error('エラー詳細:', e); // デバッグ用
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
                    action="/contact"
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
                    <div className="flex justify-center">
                        <SubmitButton />
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    {status === 'ok' && <Alert type="success">送信しました!</Alert>}
                    {status === 'error' && <Alert type="error">{error}</Alert>}
                </form>
            </Card>
        </div>
    );
}
