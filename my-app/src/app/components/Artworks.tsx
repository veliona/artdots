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

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;


export default async function Artworks(
    // { searchParams }: Props
) {
    // // const selected_category = searchParams?.category || '';
    const artworks = await getArtworks();
    // const categories = artworks.map((artwork) => artwork.type);
    // const unique_categories = [...new Set(categories)];
    const unique_categories = [...new Set(["Film", "Painting", "Literature", "Performing Arts", "Architecture", "Sculpture", "Crafts", "Music", "Photography", "Installation", "Drawing"])];
    const getUnderlineColor = (category) => {
        switch (category) {
            case 'Film': return '#1B6FDE';
            case 'Painting': return '#F85A40';
            case 'Literature': return '#6F60E1';
            case 'Performing Arts': return '#F48924';
            case 'Architecture': return '#E5338E';
            case 'Sculpture': return '#30C39E';
            case 'Crafts': return '#FFC845';
            case 'Music': return '#9E6F42';
            case 'Photography': return '#26A4DE';
            case 'Installation': return '#E0B56A';
            case 'Drawing': return '#0A8EA0';
            default: return 'black';
        }
    };

    return (
        <div>
            <div className={style.artwork__container}>
                {unique_categories.map((category) => (
                    <div className={style.category__container}>
                        <Link
                            key={category}
                            href=
                            {{
                                pathname: `/${category}`.toLowerCase(),
                                query: { category: `${category}`.toLowerCase() },
                            }}
                            className={`${style.category} ${poppins.className}`}
                            style={{
                                textDecoration: 'underline',
                                textDecorationColor: getUnderlineColor(category),
                            }}
                        >
                            <span>{category}</span>
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
                                                href=
                                                {{
                                                    pathname: `/${artwork.type}`.toLowerCase(),
                                                    query: { category: `${artwork.type}`.toLowerCase() },
                                                }}
                                                className={`${style.artwork__item} ${style.artwork__item__type}`}>
                                                {artwork.type}
                                            </Link>
                                        </li>
                                        <Link href=
                                            {{
                                                pathname: `/${artwork.type.toLowerCase()}/${artwork.name_en}`,
                                                query: {
                                                    name: `${artwork.name_en}`
                                                }
                                            }}
                                            className={`${style.artwork__item} ${style.artwork__item__title}`}>
                                            <p>{artwork.name_en}</p>
                                        </Link>
                                        <Link key={artwork.id}
                                            href={{
                                                pathname: `person/${artwork.person}`,
                                                query: { created_by: `${artwork.person}` },
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
                                                    {artwork.inspired_by.map((inspired_by_item, index) => (
                                                        <li>
                                                            <Link key={index}
                                                                href=
                                                                {{
                                                                    pathname: `/${inspired_by_item.type}/${inspired_by_item.name}`,
                                                                    query: {
                                                                        name: `${inspired_by_item.name}`,
                                                                        type: `${inspired_by_item.type}`
                                                                    }
                                                                }}
                                                                className={`${style.artwork__item}`}>
                                                                {inspired_by_item.name}
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
                                                    {artwork.inspired_others.map((inspired_others_item, index) => (
                                                        <li>
                                                            <Link key={index}
                                                                href=
                                                                {{
                                                                    pathname: `/${inspired_others_item.type}/${inspired_others_item.name}`,
                                                                    query: {
                                                                        name: `${inspired_others_item.name}`,
                                                                        type: `${inspired_others_item.type}`
                                                                    }
                                                                }}
                                                                className={`${style.artwork__item}`}>
                                                                {inspired_others_item.name}
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
            </div>
        </div >
    )
}
