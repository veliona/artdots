import style from './page.module.css';
import { Poppins } from "next/font/google";
import SignUp from './SignUp';
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Signup() {

    return (
        <div className={`${style.container} ${poppins.className}`}>
            <div className={style.text__container}>
                <p className={style.main_text}>STAY TUNED!</p>
                <p className={style.text}>Sign up to be notified when you can create an account and start adding content.</p>
                <p className={style.text}><u>No spam</u> - just one email when this is live!</p>
            </div>
            <SignUp />
        </div>
    )
}