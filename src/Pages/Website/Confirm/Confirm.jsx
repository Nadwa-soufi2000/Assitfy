import { useContext, useState } from 'react'
import './Confirm.css'
import { easeOut, motion} from 'framer-motion'
import axios from 'axios';
import { User } from '../../../Components/Website/ContextApi/ContextApi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
export default function Confirm()
{
    const[char1 , setCharOne] = useState();
    const[char2 , setCharTow] = useState();
    const[char3 , setCharThree] = useState();
    const[char4 , setCharFour] = useState();
    const[char5 , setCharfife] = useState();
    const[char6 , setCharSix] = useState();
    const user = useContext(User);
    const token = user.auth.token;
    const cookie = new Cookies();
    const getrefreshToken = cookie.get("Bearer2")
    const Userid = localStorage.getItem('id')
   // const Useremail = localStorage.getItem('email');
    console.log(Userid)
    console.log(token);
    const nav = useNavigate();
    async function confirm(e)
    {
       
        e.preventDefault();
        let verfiy = `${char1}${char2}${char3}${char4}${char5}${char6}`;
        console.log(verfiy);
        let form = new FormData();
        form.append("user_id" , Userid)
        form.append("verification_code" , verfiy)
        try {
              let response = await axios.post("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/email/verify" ,  form , {
                    headers : {
                         "Content-Type" : "application/json" ,
                         "Accept": "application/json" ,
                    },
                }
                )
                console.log(response);
                localStorage.setItem('logout' , 'LogoutButton');
                user.setAuth((prev) => {
                    return {...prev, token: getrefreshToken}
                })
                nav('/')
        }catch(err) {
            console.log(err)
        }
    }
      async function Retry()
         {
           try {
                let response = await axios.post("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/email/verification",{},
                {
                    headers : {
                        "Content-Type" : "application/json" ,
                        "Accept" : "application/json" 
                    }
                })
                console.log(response)
             }catch(err)
             {
               console.log(err)
             }
       }
    
    return(
        <motion.div 
         className='parent-confirm'
         initial={{x:'100vw'}}
         animate={{x:0}}
         transition={{duration:1.2,  ease: [0.22, 1, 0.36, 1]}}
        // exit={{x:'100vw'}}
        >
            <div className='par-con'>
                <form onSubmit={confirm}>
                    <h1>{window.localStorage.getItem('name')}مرحبا بك</h1>
                    <p className='firstP'><span>...@gmail.com</span>لقد تم إرسال رمز تأكيد </p>
                    <div className='list-inputs'>
                        <input type='text' value={char1} onChange={(e) => setCharOne(e.target.value)}/>
                        <input type='text' value={char2} onChange={(e) => setCharTow(e.target.value)} />
                        <input type='text' value={char3} onChange={(e) => setCharThree(e.target.value)}/>
                        <input type='text' value={char4} onChange={(e) => setCharFour(e.target.value)} />
                        <input type='text' value={char5} onChange={(e) => setCharfife(e.target.value)} />
                        <input type='text' value={char6} onChange={(e) => setCharSix(e.target.value)} />
                        <div className='spa'>
                            <span></span>
                        </div>
                    </div>
                        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}} className='bb1' >تأكيد</motion.button>
                        <div className='secoP'>إذا لم يصلك الرمز يمكنك إعادة المحاولة</div>
                        <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}} className='bb2' onClick={Retry} >إعادة الإرسال</motion.button>
                </form>
            </div>
        </motion.div>
    )
}