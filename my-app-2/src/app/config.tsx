import PocketBase from 'pocketbase';

export async function getArtworks() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
    pb.autoCancellation(false);
    await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL, process.env.POCKETBASE_PASSWORD);
    const data = await pb.collection('artworks').getFullList({
        sort: '-created',
        cache: 'no-store',
    });

    return data.map((record) => {
        console.log(record)
        console.log(record.id, record.image)
        if (record.image) {
            const image = pb.files.getUrl(record, record.image);
            return {
                ...record,
                image,
            };
        } else {
            return record;
        }
    },
    )
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