// import Image from 'next/image';
// import Link from 'next/link';
import style from './page.module.css';
// import { getArtworks } from './config';
import { Poppins } from "next/font/google";
import Artworks from './components/Artworks';
// import PocketBase from 'pocketbase';
// const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import { useEmblaCarousel } from "embla-carousel/react";
// import { useState, useEffect, useCallback } from "react";
// import useEmblaCarousel from 'embla-carousel-react';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

// export function EmblaCarousel() {
//     const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1500 })])
// }

// export async function getArtworks() {
//     const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
//     pb.autoCancellation(false);
//     await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);
//     const data = await pb.collection('artworks').getFullList({
//         sort: '-created',
//         cache: 'no-store',
//     });

//     return data.map((record) => {
//         console.log(record)
//         console.log(record.id, record.image)
//         if (record.image) {
//             const image = pb.files.getUrl(record, record.image);
//             return {
//                 ...record,
//                 image,
//             };
//         } else {
//             return record;
//         }
//     },
//     )
// }

// export async function getInitialProps() {
//     const artworks = await getArtworks();

//     return {
//         props: {
//             artworks,
//         },
//         revalidate: 10,
//     };
// }

export default async function Page() {
    // const artworks = await getArtworks();
    // const categories = artworks.map((artwork) => artwork.type)
    // const unique_categories = [...new Set(categories)]

    return (
        <div>
            <div className={`${style.introduction} ${poppins.className}`}>
                <p>Explore artworks and their creators.</p>
                <p>Connect dots between inspirations.</p>
            </div>
            <Artworks />
            {/* <div className={style.artwork__container}>
                {unique_categories.map((category) => (
                    <div className={style.category__container}>
                        <Link href={`${category.toLowerCase()}`}
                            className={`${style.category} ${poppins.className}`}>
                            <span>{category}</span>
                            <span>&rarr;</span>
                        </Link>
                        <ul className={`${style.artwork__container} ${poppins.className}`}>
                            {artworks.filter((artwork) => artwork.type === category).map((artwork) => (
                                <li key={artwork.id} className={`${style.artwork} ${poppins.className}`}>
                                    <div className={style.artwork__image__container}>
                                        <Image
                                            key={artwork.id}
                                            src={artwork.image}
                                            width={200}
                                            height={100}
                                            alt="image"
                                            layout="responsive"
                                        //  className={style.artwork__image}
                                        />
                                    </div>
                                    <div className={style.artwork__text__container}>
                                        <li>
                                            <Link key={artwork.id}
                                                href={`${artwork.type}`}
                                                className={`${style.artwork__item} ${style.artwork__item__type}`}>
                                                {artwork.type}
                                            </Link>
                                        </li>
                                        <Link href={`${category.toLowerCase()}/${artwork.name_en}`}
                                            className={`${style.artwork__item} ${style.artwork__item__title}`}>
                                            <p>{artwork.name_en}</p>
                                        </Link>
                                        <Link key={artwork.id} href={`${artwork.person}`}
                                            className={`${style.artwork__item} ${style.artwork__item__person}`}>
                                            <p>Created by</p>
                                            <ul>
                                                <li>{artwork.person}</li>
                                            </ul>
                                        </Link>
                                        {artwork.inspired_by ? (
                                            <div className={`${style.artwork__item__inspired_by}`}>
                                                <p>Inspired by</p>
                                                <ul>
                                                    {artwork.inspired_by.map((inspired_by, index) => (
                                                        <li>
                                                            <Link key={index}
                                                                href={`${inspired_by}`}
                                                                className={`${style.artwork__item}`}>
                                                                {inspired_by}
                                                            </Link>
                                                            {index < artwork.inspired_by.length - 1 && ', '}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}
                                        {artwork.inspired_others ? (
                                            <div className={`${style.artwork__item__inspired_others}`}>
                                                <p>Inspired others</p>
                                                <ul>
                                                    {artwork.inspired_others.map((inspired_others, index) => (
                                                        <li>
                                                            <Link key={index}
                                                                href={`${inspired_others}`}
                                                                className={`${style.artwork__item}`}>
                                                                {inspired_others}
                                                            </Link>
                                                            {index < artwork.inspired_others.length - 1 && ', '}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div> */}
        </div>
    )
}
