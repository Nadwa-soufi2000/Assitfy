import apple from './ImagesLogin/Apple Logo.png'
import google from './ImagesLogin/Google Logo.png'
import facebook from './ImagesLogin/Facebook Logo.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login()
{
    const nav = useNavigate();
    const[email , setEmail] = useState();
    const[password , setPassword] = useState();
   window.localStorage.clear()

   async function submit()
    {
        window.localStorage.setItem('logout' , 'LogoutButton');
        nav('/');
    }
    
    return(
        <div className="parent-login">
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
                    <button onClick={submit}>تسجيل دخول</button>
                    <div className="inner-div2">
                       <p style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}><Link className='rou' to='/signup'>إنشاء حساب</Link><span className='rou'>   ليس لديك حساب؟</span></p>
                        <p><Link to='https://assitfy-nadwa-soufis-projects.vercel.app/confirm' className='rou'>نسيت كلمة المرور</Link></p>
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
            
        </div>
    )
}