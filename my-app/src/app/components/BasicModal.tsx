"use client";

import Link from "next/link";
import style from './basicmodal.module.css';

export function BasicModal() {
    return (
        <>
            <div className={style.container}
                id="error-modal"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true">
                <div>
                    <p className={style.text_top}>
                        Thank you for signing up!
                    </p>
                </div>
                <div className={style.button}>
                    <Link
                        href="/signup"
                        type="button"
                        className={style.link}
                    >
                        <p className={style.text_button}>
                            OK
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}
