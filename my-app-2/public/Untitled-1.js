import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
    return (
        <nav>
            <div className={styles.header}>
                <div className={styles.header}>
                    <Image
                        src='logo.svg'
                        width={80}
                        height={80}
                        alt="Logo Art Dots"
                        className={styles.logo}
                        />
                    <span className={styles.name}>ARTDOTS</span>
                </div>
                <span className={styles.signup}>Sign up</span>
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