import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.css';
import { Ysabeau, Poppins } from "next/font/google";
const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Header() {

    return (
        <div>
            <div className={style.header}>
                <div className={style.header}>
                    <Link href="/">
                        <Image
                            src='logo-shadow.svg'
                            width={50}
                            height={50}
                            alt="Logo Art Dots"
                            className={style.logo}
                        />
                    </Link>
                    <Link href="/">
                        <span className={`${style.name} ${ysabeau.className}`}>ARTDOTS</span>
                    </Link>
                </div>
                <div className={`${style.signup} ${poppins.className}`}>
                    <Link href="/signup" className={`${style.button}`}>
                        <button type="button" className={style.button__container}>
                            <span className={style.button__text}>
                                SIGN UP
                            </span>
                            <span className={style.button__arrow}>
                                &rarr;
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}