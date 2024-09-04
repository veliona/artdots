'use client'

import Link from 'next/link';
import style from './categories.module.css';
// import { getArtworks } from '../config';
import { Poppins } from "next/font/google";
import { useSearchParams } from 'next/navigation'
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

import { categoryFilters } from "../../../constant";

export default function Categories() {
    // const artworks = await getArtworks();
    // const categories = artworks.map((artwork) => artwork.type)
    // const unique_categories = [...new Set(categories)]

    const unique_categories = categoryFilters

    return (
        <div>
            <ul className={`${style.categories} ${poppins.className}`}>
                {unique_categories.map((category) => (
                    <li key={category}>
                        <Link
                            href=
                            {{
                                pathname: `${category}`.toLowerCase(),
                                query: { category: `${category}`.toLowerCase() },
                            }}
                            className={`${category}`.toLowerCase()}>
                            <button className={`${style.category__button} ${poppins.className}`}>
                                {category}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}