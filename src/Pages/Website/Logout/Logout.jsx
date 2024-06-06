
import './Logout.css'
export default function Logout()
{
    function check1()
    {
       localStorage.setItem('logout' , '!LogoutButton');
       location.pathname = '/'
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