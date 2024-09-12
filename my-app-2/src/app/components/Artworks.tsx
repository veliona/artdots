import Image from 'next/image';
import Link from 'next/link';
import style from './artworks.module.css';
import { getArtworks } from '../config';
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

// type SearchParams = {
//     category?: string;
// }

// type Props = {
//     searchParams?: SearchParams;
// }

// export const dynamic = 'force-dynamic';
// export const dynamicParams = true;
// export const revalidate = 0;

export default async function Artworks(
    // { searchParams }: Props
) {
    // const selected_category = searchParams?.category || '';
    const artworks = await getArtworks();
    const categories = artworks.map((artwork) => artwork.type);
    const unique_categories = [...new Set(categories)];

    return (
        <div>
            <div className={style.artwork__container}>
                {unique_categories.map((category) => (
                    <div className={style.category__container}>
                        <Link href=
                            {{
                                pathname: `${category}`.toLowerCase(),
                                query: { category: `${category}`.toLowerCase() },
                            }}
                            className={`${style.category} ${poppins.className}`}>
                            <span>{category}</span>
                            <span>&rarr;</span>
                        </Link>
                        <ul className={`${style.artwork__container} ${poppins.className}`}>
                            {artworks.filter((artwork) =>
                                artwork.type === category
                            ).map((artwork) => (
                                <li key={artwork.id} className={`${style.artwork} ${poppins.className}`}>
                                    <div className={style.artwork__image__container}>
                                        <Image
                                            key={artwork.id}
                                            src={artwork.image}
                                            width={200}
                                            height={100}
                                            alt="image"
                                            layout="responsive"
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
                                        <Link href={{
                                            pathname: `${category.toLowerCase()}/${artwork.name_en}`,
                                            // query: { category: `${category}`.toLowerCase() },
                                        }}
                                            className={`${style.artwork__item} ${style.artwork__item__title}`}>
                                            <p>{artwork.name_en}</p>
                                        </Link>
                                        <Link key={artwork.id}
                                            href={{
                                                pathname: `person/${artwork.person}`,
                                                // query: { category: `${category}`.toLowerCase() },
                                            }}

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
                                                        <p>{inspired_by.name}</p>
                                                        /* <li>
                                                            <Link key={index}
                                                                href={`${inspired_by.name}`}
                                                                className={`${style.artwork__item}`}>
                                                                {inspired_by.name}
                                                            </Link>
                                                            {index < artwork.inspired_by.length - 1 && ', '}
                                                        </li> */
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : null}
                                        {artwork.inspired_others ? (
                                            <div className={`${style.artwork__item__inspired_others}`}>
                                                <p>Inspired others</p>
                                                <ul>
                                                    {artwork.inspired_others.map((inspired_others_item, index) => (
                                                        <li>
                                                            <p>test</p>
                                                            <p>{inspired_others_item}</p>
                                                        </li>
                                                        // <li>
                                                        //     <Link key={index}
                                                        //         href={`${inspired_others_item.name}`}
                                                        //         className={`${style.artwork__item}`}>
                                                        //         {inspired_others_item.name}
                                                        //     </Link>
                                                        //     {/* {index < artwork.inspired_others.length - 1 && ', '} */}
                                                        // </li>
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
            </div>
        </div >
    )
}
