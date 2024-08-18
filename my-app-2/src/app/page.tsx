import Image from 'next/image';
import Link from 'next/link';
import style from './page.module.css';
import PocketBase from 'pocketbase';
import { Poppins } from "next/font/google";
// const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export async function getArtworks() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    pb.autoCancellation(false);
    await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);
    const data = await pb.collection('artworks').getFullList({
        sort: '-created',
    });
    // const data = await pb.collection('artworks').getOne('kmazdtt0i8b9w06');
    return data.map((record) => {
        const image = pb.files.getUrl(record, record.image, {'thumb': '100x250'});
        //const url = pb.files.getUrl(data, data.image, {'thumb': '100x250'});
        return {
            ...record,
            image,
            };
    })
}

export async function getInitialProps() {
    const artworks = await getArtworks();

    return {
        props: {
            artworks,
        },
        revalidate: 10,
    };
}

export default async function Page() {
    const artworks = await getArtworks();
    console.log(artworks);
    return (
        <div>
            <ul className={`${poppins.className}`}>
                {artworks.map((artwork) => (
                    <li className={`${style.artwork} ${poppins.className}`} key={artwork.id}>
                        <Link href={`${artwork.name_en}`}>{artwork.name_en}</Link>
                        <Image
                        src={artwork.imageUrl}
                        width={50}
                        height={50}
                        alt="image"
                        // className={style.logo}
                        />
                        <Link href={`${artwork.person}`}><li>{artwork.person}</li></Link>
                        <Link href={`${artwork.type}`}><li>{artwork.type}</li></Link>
                        {artwork.inspired_by.map((inspired_by) => (
                            <Link href={`${inspired_by}`}><li>{inspired_by}</li></Link>
                        ))}
                        <Link href={`${artwork.inspired_others}`}><li>{artwork.inspired_others}</li></Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
