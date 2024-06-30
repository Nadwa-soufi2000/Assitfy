
import { useContext } from 'react';
import logo from './ImagesNavbar/Group.jpg'
import './Navbar.css'
import { User } from '../ContextApi/ContextApi';
import axios from 'axios';
import Cookies from 'universal-cookie';
export default function Navbar()
{
    const user = useContext(User);
    const token = user.auth.token;
    //const token2 = localStorage.getItem('access')
   let varw = localStorage.getItem('logout');
   localStorage.removeItem('click');
   const cookie2 = new Cookies()
   const getrefreshToken = cookie2.get("Bearer2")

    function show()
    {
        let listElements = document.querySelector('.listt');
        listElements.classList.toggle('active');
        let togg = document.querySelector('.togg');
        togg.classList.toggle('show');
    }
   async function click()
    {
        
         //  localStorage.setItem('click' , 'yes');
         //  location.pathname='/'
           try{
            let response = await axios.post("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/logout", {} ,
                {
                    headers : { 
                        Authorization : "Bearer " +  getrefreshToken ,
                        "Content-Type" : "application/json",
                        "Accept" : "application/json",
                    }
                }
            )
             console.log(response)
             console.log("Hello")
             localStorage.setItem('logout' , '!LogoutButton');
             localStorage.setItem('click' , 'yes')
             alert("Logout Successfully")
             location.pathname = '/'
        }catch(err) {
            console.log(err)
        }
    }
    function click1()
    {
         location.pathname ='/login'
    }
    function login()
    {
        location.pathname ='/login'
    }
    return(
       
        <nav>
            <div className='parent1'>
            <div className="log-sign">
                <button  className="b1">ابدأ</button> 
                {
                      varw === "LogoutButton" && token ?
                    <button onClick={click} className="b2">تسجيل خروج</button>
                    :
                    <button onClick={click1} className="b2">تسجيل دخول</button>

                }
                   
              
            </div>
            </div>
           <div className='parent2'>
            <div onClick={show} className='group-span'>
                <span></span>
                <span></span>
                <span></span>
            </div>
           <ul className='listt'>
               <li>المزيد</li>
               <li>البيع</li>
               <li>برامج الجنسية لدى اسيستفاي</li>
               <li>حول</li>
              <li>العقارات</li> 
              {    
                     varw === 'LogoutButton' && token  ? 
                     <li onClick={click} className='togg'>تسجيل خروج</li>
                     :
                     <li onClick={login} className='togg'>تسجيل دخول</li>
              }
            </ul>
              <img src={logo} alt='' />
           </div>
        </nav>
    )
}
