import style from './page.module.css';
import { getArtists } from '../../config';
import { getArtworks } from '../../config';
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

type SearchParams = {
    created_by?: string;
}

type Props = {
    searchParams?: SearchParams;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

export default async function Person({ searchParams }: Props) {
    const selected_person = searchParams?.created_by || '';
    const artists = await getArtists();
    const artworks = await getArtworks();

    return (
        <div className={`${style.container} ${poppins.className}`}>
            {artists.filter((person) =>
                selected_person ?
                    person.name === selected_person : null
            ).map((person) => (
                <div className={style.person__container}>
                    <div className={`${style.name} ${poppins.className}`}>{person.name}</div>
                    <div className={`${style.description} ${poppins.className}`}>{person.description}</div>
                    <div className={`${style.image} ${poppins.className}`}>
                        <Image
                            key={person.id}
                            src={person.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="image"
                            layout="responsive"
                        />
                    </div>
                </div>
            ))}
            <div className={`${style.artwork_section} ${poppins.className}`}>
                {artworks.filter((artwork) =>
                    selected_person ?
                        artwork.person === selected_person : null
                ).map((artwork) => (
                    <div className={`${style.work} ${poppins.className}`}>
                        <p>WORK</p>
                        <ul>
                            <li>
                                <Image
                                    key={artwork.id}
                                    src={artwork.image}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt="image for work section"
                                    layout="responsive"
                                />
                                <Link key={artwork.id}
                                    href=
                                    {{
                                        pathname: `/${artwork.type}`.toLowerCase(),
                                        query: { category: `${artwork.type}`.toLowerCase() },
                                    }}
                                    className={`${style.artwork__type} ${poppins.className}`}
                                >
                                    {artwork.type}
                                </Link>
                                <Link key={artwork.id}
                                    href=
                                    {{
                                        pathname: `/${artwork.type.toLowerCase()}/${artwork.name_en}`,
                                        query: { name: `${artwork.name_en}` },
                                    }}
                                    className={`${style.artwork__name} ${poppins.className}`}
                                >
                                    {artwork.name_en}
                                </Link>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}