import './Signup.css'
import upload from './ImagesSignup/upload.png'
import '../../../Components/Website/Media/MediaQuires.css'
import apple from './ImagesSignup/Apple Logo.png'
import google from './ImagesSignup/Google Logo.png'
import facebook from './ImagesSignup/Facebook Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { easeOut, motion} from 'framer-motion'
import axios from 'axios'
import { User } from '../../../Components/Website/ContextApi/ContextApi'
export default function Signup()
{
    const nav = useNavigate();
    const[picture1 , setPicture1] = useState();
    const[picture2 , setPicture2] = useState();
    const[Email , setemail] = useState();
    const[userName , setuserName] = useState();
    const[phone , setPhone] = useState();
    const[Password , setpassword] = useState();
    const[confirmPassword , setconfirmPassword] = useState();
    console.log(picture1)
     const user = useContext(User);
     async function submit(e)
     {
        e.preventDefault();
        const form = new FormData();
        form.append('username' , userName);
        form.append('phone_number' , phone);
        form.append('email' , Email);
        form.append('password' , Password) ;
        form.append('password_confirmation' , confirmPassword); 
        form.append('profile_photo' , picture1);
        form.append('certificate' , picture2);
        try {
            let response = await axios.post("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/signup" , 
                form)
                console.log(response)
                const token = response.data.token;
                console.log(token)
                const userDetials = response.data.data;
                localStorage.setItem('id' , response.data.data.id)
                localStorage.setItem('name' , response.data.data.username)
                user.setAuth( {token , userDetials} );
                console.log(user.auth)
                nav('/confirm')
        } catch(err) {
            console.log(err)
        }
     }
    return(
        <motion.div 
         className='parent-signup'
         initial={{x:'100vw'}}
         animate={{x:0}}
         transition={{duration:1.2, ease: [0.22, 1, 0.36, 1]}}
         exit={{x:'100vw'}}
        >
            <div className='parent-signup-child'>
                <form onSubmit={submit}>
                    <h1>إنشاء حساب</h1>
                    <div className='parent-childs'>
                        <div className='child1'>
                            <div className='com1'>
                                <label className='th-la1'>الصورة الشخصية</label>
                                <div className='com1-ch'>
                                     <input onChange={(e) =>setPicture1(e.target.files[0])} id='co1' type='file'/>
                                     <label htmlFor='co1' className='th-la'>اسحب وأفلت الصورة هنا أو قم برفعها من الملفات</label>
                                     <img src={upload} alt=' '/>
                                     <p>2MB الحجم الأقصى</p>
                                </div>
                            </div>
                            <div className='com2'>
                                <label className='th-la2'>إثبات الشخصية</label>
                                <div className='com2-ch'>
                                     <input onChange={(e) => setPicture2(e.target.files[0])} id='co2' type='file'/>
                                     <label htmlFor='co2' className='th-la3'>اسحب وأفلت الصورة هنا أو قم برفعها من الملفات</label>
                                     <img  src={upload} alt=' '/>
                                     <p>1MB الحجم الأقصى</p>
                                </div>
                            </div>
                            <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3 , ease:easeOut}} >إنشاء حساب</motion.button>
                            <p><span className='acc'>لديك حساب ؟ </span><Link className='acc' to='/login'>تسجيل دخول</Link></p>
                        </div>

                        <div className='child2'>
                            <div className='i1'>
                                <label>الإيميل</label>
                                <input value={Email} onChange={(e) => setemail(e.target.value)} type='email'/>
                            </div>
                            <div className='i2'>
                                <label>اسم المستخدم</label>
                                <input value={userName} onChange={(e) => setuserName(e.target.value)} type='text'/>
                            </div>
                            <div className='i3'>
                                <label>رقم الهاتف</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type='text'/>
                            </div>
                            <div className='i4'>
                                <label>كلمة المرور</label>
                                <input value={Password} onChange={(e) => setpassword(e.target.value)} type='password'/>
                            </div>
                            <div className='i5'>
                                <label>تأكيد كلمة المرور</label>
                                <input value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} type='password'/>
                            </div>

                        </div>
                    </div>
                    <div className='div3'>
                        <div className='go'>
                            <img src={google} alt=''/>
                            <h2>Google</h2>
                        </div>
                        <div className='ap'>
                            <img src={apple} alt=''/>
                            <h2>Apple</h2>
                        </div>
                        <div className='face'>
                            <img src={facebook} alt=''/>
                            <h2>Facebook</h2>
                        </div>

                    </div>
                </form>
            </div>
        </motion.div>
    )
}
