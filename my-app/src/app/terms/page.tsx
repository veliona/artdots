import style from './page.module.css';
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Terms() {
    return (
        <div className={`${style.container} ${poppins.className}`}>TERMS & CONDITIONS</div>
    )
}