import style from './page.module.css';
import { getArtworks } from '../config';
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

type SearchParams = {
    category?: string;
}

type Props = {
    searchParams?: SearchParams;
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

export default async function Category({ searchParams }: Props) {
    const selected_category = searchParams?.category || '';
    const artworks = await getArtworks();

    return (
        <div className={style.wrapper}>
            {selected_category == 'film' ? (
                <div className={`${style.introduction} ${poppins.className}`}>
                    <p style={{ color: '#1B6FDE' }}><span>Film</span></p>
                    <p>Movies touch our hearts, awaken our vision, and change the way we see things. They take us to other places. They open doors and minds. Movies are the memories of our lifetime. We need to keep them alive.</p>
                    <p>Martin Scorsese</p>
                </div>
            ) :
                selected_category == 'painting' ? (
                    <div className={`${style.introduction} ${poppins.className}`}>
                        <p style={{ color: '#F85A40' }}><span>Painting</span></p>
                        <p>Painting is just another way of keeping a diary.</p>
                        <p>Pablo Picasso</p>
                    </div>
                ) :
                    selected_category == 'literature' ? (
                        <div className={`${style.introduction} ${poppins.className}`}>
                            <p style={{ color: '#6F60E1' }}><span>Literature</span></p>
                            <p>Literature adds to reality, it does not simply describe it. It enriches the necessary competencies that daily life requires and provides; and in this respect, it irrigates the deserts that our lives have already become.</p>
                            <p>C. S. Lewis</p>
                        </div>
                    ) :
                        selected_category == 'performing arts' ? (
                            <div className={`${style.introduction} ${poppins.className}`}>
                                <p style={{ color: '#F48924' }}><span>Performing Arts</span></p>
                                <p>All good performance pieces have some philosophical validity. That's the difference between mere theater and performance art.</p>
                                <p>Jack Bowman</p>
                            </div>
                        ) :
                            selected_category == 'architecture' ? (
                                <div className={`${style.introduction} ${poppins.className}`}>
                                    <p style={{ color: '#E5338E' }}><span>Architecture</span></p>
                                    <p>Architecture should speak of its time and place, but yearn for timelessness.</p>
                                    <p>Frank Gehry</p>
                                </div>
                            ) :
                                selected_category == 'sculpture' ? (
                                    <div className={`${style.introduction} ${poppins.className}`}>
                                        <p style={{ color: '#30C39E' }}><span>Sculpture</span></p>
                                        <p>Sculpture is an art of the open air. Daylight, sunlight, is necessary to it, and for me, its best setting and complement is nature.</p>
                                        <p>Henry Moore</p>
                                    </div>
                                ) :
                                    selected_category == 'crafts' ? (
                                        <div className={`${style.introduction} ${poppins.className}`}>
                                            <p style={{ color: '#FFC845' }}><span>Crafts</span></p>
                                            <p>The beauty of handmade is in the imperfections.</p>
                                            <p>Anon</p>
                                        </div>
                                    ) :
                                        selected_category == 'music' ? (
                                            <div className={`${style.introduction} ${poppins.className}`}>
                                                <p style={{ color: '#9E6F42' }}><span>Music</span></p>
                                                <p>Without music, life would be a mistake.</p>
                                                <p>Friedrich Nietzsche</p>
                                            </div>
                                        ) :
                                            selected_category == 'photography' ? (
                                                <div className={`${style.introduction} ${poppins.className}`}>
                                                    <p style={{ color: '#26A4DE' }}><span>Photography</span></p>
                                                    <p>We are making photographs to understand what our lives mean to us.</p>
                                                    <p>Ralph Hattersley</p>
                                                </div>
                                            ) :
                                                selected_category == 'installation' ? (
                                                    <div className={`${style.introduction} ${poppins.className}`}>
                                                        <p style={{ color: '#E0B56A' }}><span>Installation</span></p>
                                                        <p>The whole world is an art gallery when you're mindful. There are beautiful things everywhere and they're free.</p>
                                                        <p>Charles Tart</p>
                                                    </div>
                                                ) : selected_category == 'drawing' ? (
                                                    <div className={`${style.introduction} ${poppins.className}`}>
                                                        <p style={{ color: '#0A8EA0' }}><span>Drawing</span></p>
                                                        <p>A drawing is simply a line going for a walk.</p>
                                                        <p>Paul Klee</p>
                                                    </div>
                                                ) :
                                                    (<div className={`${style.introduction} ${poppins.className}`}>Other</div>)
            }
            <div className={style.artwork__container}>
                <ul className={`${style.artwork__container} ${poppins.className}`}>
                    {artworks.filter((artwork) =>
                        selected_category ?
                            artwork.type.toLowerCase() === selected_category : null
                    ).map((artwork) => (
                        <li key={artwork.id} className={`${style.artwork} ${poppins.className}`}>
                            <div className={style.artwork__image__container}>
                                <Link href=
                                    {{
                                        pathname: `/${artwork.type.toLowerCase()}/${artwork.name_en}`,
                                        query: {
                                            name: `${artwork.name_en}`
                                        }
                                    }}>
                                    <Image
                                        key={artwork.id}
                                        src={artwork.image}
                                        width={200}
                                        height={100}
                                        alt="image"
                                        layout="responsive"
                                    />
                                </Link>
                            </div>
                            <div className={style.artwork__text__container}>
                                <li>
                                    <Link key={artwork.id}
                                        href={`${artwork.type}`}
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
                                        pathname: `/person/${artwork.person}`,
                                        query: {
                                            created_by: `${artwork.person}`
                                        }
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
        </div >
    )
}