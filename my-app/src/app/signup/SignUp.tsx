'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BasicModal } from "../components/BasicModal";
//import Link from "next/link";
import style from './page.module.css';

type Props = {
    searchParams: Record<string, string> | null | undefined;
};

export default function SignUp({ searchParams }: Props) {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();
    const pathname = usePathname();
    const currentSearchParams = useSearchParams(); // Get the current search params

    useEffect(() => {
        // Check if the modal query param is present and set showModal state
        const modalParam = currentSearchParams.get('modal');
        if (modalParam === 'true') {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [currentSearchParams]); // Re-run this effect when search params change

    const create = async (e: React.FormEvent) => {
        // Prevent the form from triggering a full page reload
        e.preventDefault();

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
        const params = new URLSearchParams();
        params.set("modal", "true");
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <>
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
            {showModal && <BasicModal />}
        </>
    );
}