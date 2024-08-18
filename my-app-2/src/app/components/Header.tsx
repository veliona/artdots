import Image from 'next/image';
import Link from 'next/link';
import style from './header.module.css';
import PocketBase from 'pocketbase';
import { Ysabeau, Poppins } from "next/font/google";
const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

async function getCategories() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    pb.autoCancellation(false);
    await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);
    const data = await pb.collection('categories').getFullList({
        sort: '-created',
    });
    return data;
}

export async function getStaticProps() {
    const categories = await getCategories();

    return {
        props: {
            categories,
        },
        revalidate: 10,
    };
}

export default async function Header() {
    const categories = await getCategories();

    return (
        <nav>
             <div className={style.header}>
                 <div className={style.header}>
                     <Image
                        src='logo-shadow.svg'
                        width={50}
                        height={50}
                        alt="Logo Art Dots"
                        className={style.logo}
                        />
                    <span className={`${style.name} ${ysabeau.className}`}>ARTDOTS</span>
                </div>
                <div className={`${style.signup} ${poppins.className}`}>
                    <Link href="/signup" className={`${style.button}`}>
                        <button type="button" className={style.button__text}>SIGN UP &rArr;</button>
                    </Link>
                </div>
            </div>
            <ul className={`${style.categories} ${poppins.className}`}>
                {categories.map((category) => (
                    <Link href={`${category.category}`}>
                    <li key={category.id}>{category.category}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
  }