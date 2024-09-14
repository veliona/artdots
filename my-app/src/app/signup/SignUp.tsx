'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './page.module.css';

export default function SignUp() {
    const [email, setEmail] = useState('');

    const router = useRouter();

    const create = async () => {

        await fetch('http://127.0.0.1:8090/api/collections/waiting_list/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
            }),
        });

        setEmail('');

        router.refresh();
    }

    return (
        <form onSubmit={create} className={style.form}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.email}
                required
            />
            <button type="submit" className={style.button}>
                Join the waitlist
            </button>
        </form>
    );
}