'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ text = '送信' }) {
    const { pending } = useFormStatus();
    return (
        <button className="btn" type="submit">
            {text}
        </button>
    );
}
