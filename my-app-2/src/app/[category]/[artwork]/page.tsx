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
                <div>
                    <span className={`${style.title} ${poppins.className}`}>{artwork.name_en}</span>
                    <span className={`${style.image} ${poppins.className}`}>
                        <Image
                            key={artwork.id}
                            src={artwork.image}
                            width={200}
                            height={100}
                            alt="image"
                            layout="responsive"
                        />
                    </span>
                    <div className={`${style.created_by} ${poppins.className}`}>{artwork.person}</div>
                    {artwork.inspired_by ? (
                        <div className={`${style.inspired_by} ${poppins.className}`}>
                            <p>INSPIRED BY</p>
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
                                        {artworks.filter((artwork) =>
                                            selected_name ?
                                                artwork.name_en === inspired_by_item.name : null
                                        ).map((inspired_by_artwork) => (
                                            <Image
                                                key={inspired_by_artwork.id}
                                                src={inspired_by_artwork.image}
                                                width={200}
                                                height={100}
                                                alt="`image for inpired by section"
                                            />))}
                                        {index < artwork.inspired_by.length - 1 && ', '}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                    {artwork.inspired_others ? (
                        <div className={`${style.inspired_others} ${poppins.className}`}>
                            <p>INSPIRED OTHERS</p>
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
                                        {artworks.filter((artwork) =>
                                            selected_name ?
                                                artwork.name_en === inspired_others_item.name : null
                                        ).map((inspired_others_artwork) => (
                                            <Image
                                                key={inspired_others_artwork.id}
                                                src={inspired_others_artwork.image}
                                                width={200}
                                                height={100}
                                                alt="`image for inpired other section"
                                            />))}
                                        {index < artwork.inspired_others.length - 1 && ', '}
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