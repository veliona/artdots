import style from './page.module.css';
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function Signup() {
    
    return (
        <div className={style.container}>
            <div>SIGNUP</div>
            <form
                method="POST"
                className={style.form}
            >
                <input type="email" name="Email" placeholder="Email" className={style.email} required />
                <input
                    type="submit"
                    className={style.button}
                    value="Join the waitlist"
                />
            </form>
        </div>
    )
}

// import { FormEvent } from 'react'
 
// export default function Page() {
//   async function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
 
//     const formData = new FormData(event.currentTarget)
//     const response = await fetch('/api/submit', {
//       method: 'POST',
//       body: formData,
//     })
 
//     // Handle response if necessary
//     const data = await response.json()
//     // ...
//   }
 
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" />
//       <button type="submit">Submit</button>
//     </form>
//   )
// }


// import PocketBase from 'pocketbase';

// const pb = new PocketBase('http://127.0.0.1:8090');

// const data = {
//     "email": "test@example.com"
// };

// const record = await pb.collection('waiting_list').create(data);
