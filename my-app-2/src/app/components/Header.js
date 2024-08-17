import Image from 'next/image'
import style from './header.module.css'
import { Ysabeau, Poppins } from "next/font/google";
const ysabeau = Ysabeau({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Header() {
    return (
        <nav>
            <div className={style.header}>
                <div className={style.header}>
                    <Image
                        src='logo-shadow.svg'
                        width={50}
                        height={50}
                        alt="Logo Art Dots"
                        className={style.logo}
                        />
                    <span className={`${style.name} ${ysabeau.className}`}>ARTDOTS</span>
                </div>
                <div className={`${style.signup} ${poppins.className}`}>
                    <a href="#" className={`${style.button} ${style.type}`}>
                        {/* <div className={style.button__line}></div>
                        <div className={style.button__line}></div> */}
                        <span className={style.button__text}>SIGN UP</span>
                        {/* <div className={style.button__drow1}></div>
                        <div className={style.button__drow2}></div> */}
                    </a>
                </div>
            </div>
        </nav>
        
    //     <section id="art_type">
    //     <div id="box">
    //       <nav>
    //         <ul>
    //           <li><a href="#film">Film</a></li>
    //           <li><a href="#music">Music</a></li>
    //           <li><a href="#cv">CV</a></li>
    //           <li><a href="#contact">CONTACT</a></li>
    //         </ul>
    //       </nav>
    //   </div>
    //   </section>
    );
  }