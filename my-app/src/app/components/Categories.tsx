'use client'

import Link from 'next/link';
import style from './categories.module.css';
import { Poppins } from "next/font/google";
import { categoryFilters } from "../../../constant";
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

type SearchParams = {
    category?: string;
}

export default function Categories() {
    const unique_categories = categoryFilters;

    return (
        <div>
            <ul className={`${style.categories} ${poppins.className}`}>
                {unique_categories.map((category) => (
                    <li key={category}>
                        <Link
                            href=
                            {{
                                pathname: '/category/',
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