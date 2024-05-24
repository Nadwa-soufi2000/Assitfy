
import './Logout.css'
export default function Logout()
{
    function check1()
    {
       window.localStorage.setItem('logout' , '!LogoutButton');
       window.location.pathname = '/'
    }

    function check2()
    {
        window.localStorage.setItem('logout' , 'LogoutButton');
        window.localStorage.setItem('click' , 'no');
        window.location.pathname = '/'
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