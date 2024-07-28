import Image from 'next/image'

export default function HomePage() {
    return (
        <nav>
            <div className="header">
                <Image
                    src='logo.svg'
                    width={100}
                    height={100}
                    alt="Logo Art Dots"
                    />
                <span className = "logoText">ARTDOTS</span>
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