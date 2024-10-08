"use client";

import Image from 'next/image';
import Link from "next/link";
import style from './basicmodal.module.css';

export function BasicModal() {
    return (
        <div className={style.container}
            id="error-modal"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true">
            <Image
                src='/thankful.png'
                width={150}
                height={150}
                alt="Thankful icon"
                className='image'
            />
            <p className={style.text_top}>
                Thank you for signing up!
            </p>
            <div className={style.button}>
                <Link
                    href="/signup"
                    type="button"
                    className={style.link}
                >
                    <span className={style.text_button}>
                        OK
                    </span>
                </Link>
            </div>
            <div className={style.container__reference}>Icon made by <a href="https://www.flaticon.com/authors/lokasset" title="lokasset"> lokasset</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}
