import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.css';
import { getArtworks } from '../config';
import { Ysabeau, Poppins } from "next/font/google";
const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Header() {
    const artworks = await getArtworks();
    const categories = artworks.map((artwork) => artwork.type)
    const unique_categories = [...new Set(categories)]

    return (
        <nav>
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
            <ul className={`${style.categories} ${poppins.className}`}>
                {unique_categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`${category}`.toLowerCase()}>
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}