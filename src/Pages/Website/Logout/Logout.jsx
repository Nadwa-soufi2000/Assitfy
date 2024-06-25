
import axios from 'axios';
import './Logout.css'
import { useContext } from 'react';
import { User } from '../../../Components/Website/ContextApi/ContextApi';
export default function Logout()
{
    const user = useContext(User);
    const token = user.auth.token;
   async function check1()
    {
        try{
            let response = await axios.post("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/logout" , {} ,
                {
                    headers : {
                        Authorization : "Bearer " + token ,
                        "Accept" :"application/json"
                    }
                }
            )
             console.log(response)
             localStorage.setItem('logout' , '!LogoutButton');
             location.pathname = '/'
        }catch(err) {
            console.log(err)
        }
    }

    function check2()
    {
        localStorage.setItem('logout' , 'LogoutButton');
        localStorage.setItem('click' , 'no');
        location.pathname = '/'
    }
    return(
        <div className='parent-logout'>
            <div className='parent-logout-child'>
                <form>
                     <h1>هل أنت متأكد من تسجيل الخروج ؟</h1>
                     <button onClick={check1} className='bt1'>تأكيد</button>
                     <button onClick={check2} className='bt2'>تراجع</button>
                </form>
            </div>
        </div>
    )
}