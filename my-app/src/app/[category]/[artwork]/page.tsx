import style from './page.module.css';
import { getArtworks } from '../../config';
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

type SearchParams = {
    name?: string;
}

type Props = {
    searchParams?: SearchParams;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

export default async function Artwork({ searchParams }: Props) {
    const selected_name = searchParams?.name || '';
    const artworks = await getArtworks();

    return (
        <div className={`${style.container} ${poppins.className}`}>
            {artworks.filter((artwork) =>
                selected_name ?
                    artwork.name_en === selected_name : null
            ).map((artwork) => (
                <div className={style.artwork__container}>
                    <div className={`${style.header} ${poppins.className}`}>
                        <div className={`${style.title} ${poppins.className}`}>{artwork.name_en}</div>
                        <Link className={`${style.created_by} ${poppins.className}`}
                            href={{
                                pathname: `/person/${artwork.person}`,
                                query: {
                                    created_by: `${artwork.person}`
                                }
                            }}>
                            {artwork.person}
                        </Link>
                    </div>
                    <div className={`${style.image} ${poppins.className}`}>
                        <Image
                            key={artwork.id}
                            src={artwork.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="image"
                            layout="responsive"
                        />
                    </div>
                    {artwork.inspired_by ? (
                        <div className={`${style.inspired_by} ${poppins.className}`}>
                            <p>
                                <span>INSPIRED BY</span>
                                <span>&rarr;</span>
                            </p>
                            <ul>
                                {artwork.inspired_by.map((inspired_by_item, index) => (
                                    <li className={`${style.item__container} ${poppins.className}`}>
                                        {artworks.filter((artwork) =>
                                            selected_name ?
                                                artwork.name_en === inspired_by_item.name : null
                                        ).map((inspired_by_artwork) => (
                                            <div>
                                                <Image
                                                    key={inspired_by_artwork.id}
                                                    src={inspired_by_artwork.image}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt="image for inspired by section"
                                                    layout="responsive"
                                                />
                                                <Link key={inspired_by_artwork.id}
                                                    href=
                                                    {{
                                                        pathname: `/${inspired_by_artwork.type}`.toLowerCase(),
                                                        query: { category: `${inspired_by_artwork.type}`.toLowerCase() },
                                                    }}
                                                    className={`${style.type} ${poppins.className}`}
                                                >
                                                    {inspired_by_artwork.type}
                                                </Link>
                                            </div>
                                        ))}
                                        <Link key={index}
                                            href=
                                            {{
                                                pathname: `/${inspired_by_item.type}/${inspired_by_item.name}`,
                                                query: {
                                                    name: `${inspired_by_item.name}`,
                                                    category: `${inspired_by_item.type}`
                                                }
                                            }}
                                            className={`${style.name}`}>
                                            {inspired_by_item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                    {artwork.inspired_others ? (
                        <div className={`${style.inspired_others} ${poppins.className}`}>
                            <p>
                                <span>INSPIRED OTHERS</span>
                                <span>&rarr;</span>
                            </p>
                            <ul>
                                {artwork.inspired_others.map((inspired_others_item, index) => (
                                    <li className={`${style.item__container} ${poppins.className}`}>
                                        {artworks.filter((artwork) =>
                                            selected_name ?
                                                artwork.name_en === inspired_others_item.name : null
                                        ).map((inspired_others_artwork) => (
                                            <div>
                                                <Image
                                                    key={inspired_others_artwork.id}
                                                    src={inspired_others_artwork.image}
                                                    width={0}
                                                    height={0}
                                                    sizes="100vw"
                                                    alt="image for inspired other section"
                                                    layout="responsive"
                                                />
                                                <Link key={inspired_others_artwork.id}
                                                    href=
                                                    {{
                                                        pathname: `/${inspired_others_artwork.type}`.toLowerCase(),
                                                        query: { category: `${inspired_others_artwork.type}`.toLowerCase() },
                                                    }}
                                                    className={`${style.type} ${poppins.className}`}
                                                >
                                                    {inspired_others_artwork.type}
                                                </Link>
                                            </div>))}
                                        <Link key={index}
                                            href=
                                            {{
                                                pathname: `/${inspired_others_item.type}/${inspired_others_item.name}`,
                                                query: {
                                                    name: `${inspired_others_item.name}`,
                                                    type: `${inspired_others_item.type}`
                                                }
                                            }}
                                            className={`${style.name}`}>
                                            {inspired_others_item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            )
            )
            }
        </div >
    )
}