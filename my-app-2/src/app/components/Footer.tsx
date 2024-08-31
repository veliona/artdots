import Link from 'next/link';
import style from './footer.module.css';
import { ReactElement } from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Poppins } from "next/font/google";
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
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
                {/* <ul className={style.icons}>
                    <li>
                        <FontAwesomeIcon icon={faTwitter} />
                    </li>
                </ul> */}
                <p className={style.contact}>Contact: hello@artdots.co</p>
                <p className={style.credits}>© 2024 Design & Development by Julia Jakubczak</p>
            </div>
        </footer>
    )
}
