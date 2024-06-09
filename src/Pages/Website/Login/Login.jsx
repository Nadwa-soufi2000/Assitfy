import apple from './ImagesLogin/Apple Logo.png'
import google from './ImagesLogin/Google Logo.png'
import facebook from './ImagesLogin/Facebook Logo.png'
import { easeOut, motion} from 'framer-motion'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'



export default function Login()
{
    const nav = useNavigate();
    const[email , setEmail] = useState();
    const[password , setPassword] = useState();
   
    
    //localStorage.clear()
     
    function submit()
    {
        localStorage.setItem('logout' , 'LogoutButton');
        console.log('Hello');
        nav('/');
    }
    
    return(
        <motion.div 
         className="parent-login"
         initial={{x:'100vw'}}
         animate={{x:0}}
         transition={{duration:1.2,  ease: [0.22, 1, 0.36, 1]}}
         exit={{x:'100vw'}}
        >
            <div className="inner-div">
                <form>
                    <h1>تسجيل دخول</h1>
                    <div className='in1'>
                        <label htmlFor="1">الإيميل  أو رقم الهاتف</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='1'/>
                    </div>
                    <div className='in2'>
                        <label htmlFor="2">كلمة المرور</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id="2"/>
                    </div>
                    <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}}  onClick={submit} >تسجيل دخول</motion.button>
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
