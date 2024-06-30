import apple from './ImagesLogin/Apple Logo.png'
import google from './ImagesLogin/Google Logo.png'
import facebook from './ImagesLogin/Facebook Logo.png'
import { easeOut, motion} from 'framer-motion'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react'
import axios from 'axios'
import { User } from '../../../Components/Website/ContextApi/ContextApi'
import Cookies from 'universal-cookie'



export default function Login()
{
    const nav = useNavigate();
    const[email , setEmail] = useState();
    const[number , setNumber] = useState();
    const[password , setPassword] = useState();
    const  user = useContext(User);
    const cookie = new Cookies();
    const cookie2 = new Cookies();
    //localStorage.clear()
     
   async function submit(e)
    {
         e.preventDefault();
         
         const form = new FormData()
         form.append("email" , email)
         form.append("password" ,password)
         form.append("phone_number" , number)
         try {
            let response = await axios.post("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/login" ,
                form ,
                {
                    headers : {
                        "Content-Type" : "application/json",
                        "Accept" :"application/json"
                    }
                }
            )
            console.log(response);
            localStorage.setItem('logout' , 'LogoutButton');
            const token = response.data.token;
            const refreshToken = response.data.refresh_token;
            const userDetials = response.data.data;
          //localStorage.setItem('access' , token);
          //localStorage.setItem('name' , response.data.data.name)
            console.log(token)
            console.log(refreshToken)
            user.setAuth( {token , userDetials} );
            cookie.set("Bearer" , token)
            cookie2.set("Bearer2" , refreshToken);
            nav('/');

         }catch(err) 
         {
            console.log(err)
         }
         
    }
    
    return(
        <motion.div 
         className="parent-login"
         initial={{x:'100vw'}}
         animate={{x:0}}
         transition={{duration:1.2,  ease: [0.22, 1, 0.36, 1]}}
         //exit={{x:'100vw'}}
        >
            <div className="inner-div">
                <form onSubmit={submit}>
                    <h1>تسجيل دخول</h1>
                    <div className='in1'>
                        <label htmlFor="1">الإيميل</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='1'/>
                    </div>
                    <div className='in1'>
                        <label htmlFor="3"> رقم الهاتف</label>
                        <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" id='3'/>
                    </div>
                    <div className='in2'>
                        <label htmlFor="2">كلمة المرور</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id="2"/>
                    </div>
                    <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}} >تسجيل دخول</motion.button>
                    <div className="inner-div2">
                       <p style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}><Link className='rou' to='/signup'>إنشاء حساب</Link><span className='rou'>   ليس لديك حساب؟</span></p>
                        <p><Link to='/confirm' className='rou'>نسيت كلمة المرور</Link></p>
                    </div>
                    <div className="inner-div3">
                        <span></span>
                        <p></p>
                        <span></span>
                    </div>
                    <div className='inner-div4'>
                        <div className='google'>
                            <img src={google} alt=''/>
                            <h2>Google</h2>
                        </div>
                        <div className='apple'>
                            <img src={apple} alt=''/>
                            <h2>Apple</h2>
                        </div>
                        <div className='facebook'>
                            <img src={facebook} alt=''/>
                            <h2>Facebook</h2>
                        </div>

                    </div>
                </form>
            </div>
            
        </motion.div>
    )
}
