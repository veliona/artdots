// "use client";

// import style from './page.module.css';
// // import { getArtworks } from './config';
// import { Poppins } from "next/font/google";
// // import Image from 'next/image';
// // import Link from 'next/link';
import Artworks from '../components/Artworks';
// // import { useSearchParams } from "next/navigation";
// import { usePathname } from 'next/navigation';
// import SetQueryFilters from "./SetQueryFilters";

import { getInitialProps } from '../config';

export default function Category() {
    // const pathname = usePathname();
    // console.log(pathname)
    console.log(getInitialProps)

    return (
        <Artworks />
    )
}