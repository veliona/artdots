// import Image from 'next/image';
// import Link from 'next/link';
import style from './page.module.css';
import { Ysabeau, Poppins } from "next/font/google";
const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default async function Mission() {
    return (
        <div className={`${style.container} ${poppins.className}`}>
            <div className={style.section}>
                <p className={style.title}>STORY</p>
                <p>My childhood home was full of adoration for art - filled with poetry books, volumes on Impressionizm, and magazines about painting and drawing. I remember my mom sway with a smile to the tunes of Frank Sinatra and while watching Fred Astaire dance. These experiences shaped the foundation of my love and respect for art and creatives.</p>
                <p>The idea for this project first came to me when I was in high school, and it has stayed on my mind ever since.</p>
                <p>I am grateful to see it come to life and be able to share it.</p>
            </div>
            <div className={style.section}>
                <p className={style.title}>MISSION</p>
                <p>Art has the power to unite, uplift, and provoke, challenging us to question, reflect, and grow. It transcends boundaries, speaking to the core of our humanity.</p>
                <p>
                    Artdots serves as a building block of this vision striving to embody the essence of art by shining a spotlight on those behind the scenes,
                    celebrating the collaborative nature of the creative process, emphasising the importance of mutual inspiration, and equality between different art forms.
                </p>
            </div>
        </div>
    )
}
