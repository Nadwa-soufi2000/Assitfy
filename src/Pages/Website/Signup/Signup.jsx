import './Signup.css'
import upload from './ImagesSignup/upload.png'
import '../../../Components/Website/Media/MediaQuires.css'
import apple from './ImagesSignup/Apple Logo.png'
import google from './ImagesSignup/Google Logo.png'
import facebook from './ImagesSignup/Facebook Logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Signup()
{
    const[picture1 , setPicture1] = useState();
    const[picture2 , setPicture2] = useState();
    const[Email , setemail] = useState();
    const[userName , setuserName] = useState();
    const[phone , setPhone] = useState();
    const[Password , setpassword] = useState();
    const[confirmPassword , setconfirmPassword] = useState();

     async function submit()
     {
        const form = new FormData();
        form.append('picture1' , picture1);
        form.append('picture2' , picture2);
        form.append('email' , Email);
        form.append('userName' , userName);
        form.append('phone' , phone);
        form.append('password' , Password) ;
        form.append('confirmPassword' , confirmPassword);  
     }
    return(
        <div className='parent-signup'>
            <div className='parent-signup-child'>
                <form>
                    <h1>إنشاء حساب</h1>
                    <div className='parent-childs'>
                        <div className='child1'>
                            <div className='com1'>
                                <label className='th-la1'>الصورة الشخصية</label>
                                <div className='com1-ch'>
                                     <input id='co1' type='file'/>
                                     <label htmlFor='co1' className='th-la'>اسحب وأفلت الصورة هنا أو قم برفعها من الملفات</label>
                                     <img onChange={(e) => setPicture1(e.target.files)} src={upload} alt=' '/>
                                     <p>2MB الحجم الأقصى</p>
                                </div>
                            </div>
                            <div className='com2'>
                                <label className='th-la2'>إثبات الشخصية</label>
                                <div className='com2-ch'>
                                     <input id='co2' type='file'/>
                                     <label htmlFor='co2' className='th-la3'>اسحب وأفلت الصورة هنا أو قم برفعها من الملفات</label>
                                     <img onChange={(e) => setPicture2(e.target.files)} src={upload} alt=' '/>
                                     <p>1MB الحجم الأقصى</p>
                                </div>
                            </div>
                            <button onSubmit={submit}>إنشاء حساب</button>
                            <p><span className='acc'>لديك حساب ؟ </span><Link className='acc' to='/Assitfy/login'>تسجيل دخول</Link></p>
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
        </div>
    )
}