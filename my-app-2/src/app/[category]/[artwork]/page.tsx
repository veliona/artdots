import style from './page.module.css';
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Artwork() {
    return (
        <div className={`${style.container} ${poppins.className}`}>
            <span className={`${style.title} ${poppins.className}`}>TITLE</span>
            <span className={`${style.image} ${poppins.className}`}>IMAGE</span>
            <div className={`${style.created_by} ${poppins.className}`}>CREATED BY</div>
            <div className={`${style.inspired_by} ${poppins.className}`}>INSPIRED BY</div>
            <div className={`${style.inspired_others} ${poppins.className}`}>INSPIRED OTHERS</div>
        </div>
    )
}