'use client'

import Link from 'next/link';
import style from './categories.module.css';
import { Poppins } from "next/font/google";
import { categoryFilters } from "../../../constant";
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

type SearchParams = {
    category?: string;
}

type Props = {
    searchParams?: SearchParams;
}

export default function Categories({ searchParams }: Props) {
    const unique_categories = categoryFilters;
    const selected_category = searchParams?.category || '';

    const getCategoryClass = (category: string) => {
        const classMap = {
            'film': style['category-film'],
            'painting': style['category-painting'],
            'literature': style['category-literature'],
            'performing arts': style['category-performing-arts'],
            'architecture': style['category-architecture'],
            'sculpture': style['category-sculpture'],
            'crafts': style['category-crafts'],
            'music': style['category-music'],
            'photography': style['category-photography'],
            'installation': style['category-installation'],
            'drawing': style['category-drawing'],
        };

        return classMap[category.toLowerCase()] || '';
    };

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
                        >
                            <button className={`${style.category__button} ${poppins.className} ${getCategoryClass(category)}`}>
                                {category}
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}