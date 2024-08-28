import Image from 'next/image';
import Link from 'next/link';
import style from './footer.module.css';
import PocketBase from 'pocketbase';
import { Ysabeau, Poppins } from "next/font/google";
const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Footer() {
    return (
        <footer className={`${style.footer} ${poppins.className}`}>
            <div className={style.container}>
                <ul className={style.site__items}>
                    <li>
                        <Link href="/mission">
                            Story & Mission
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms">
                            Terms and Conditions
                        </Link>
                    </li>
                </ul>
                <ul className={style.icons}>
                    <li>Twitter</li>
                </ul>
                <p className={style.credits}>© 2024 Design & Development by Julia Jakubczak</p>
            </div>
        </footer>
    )
}
