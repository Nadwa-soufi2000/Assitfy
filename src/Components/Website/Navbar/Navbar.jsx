import logo from './ImagesNavbar/Group.jpg'
import './Navbar.css'
export default function Navbar()
{
    let varw = window.localStorage.getItem('logout');
    function show()
    {
        let listElements = document.querySelector('.listt');
        listElements.classList.toggle('active');
        let togg = document.querySelector('.togg');
        togg.classList.toggle('show');
    }
    function click()
    {
        window.localStorage.setItem('click' , 'yes');
        window.location.pathname='/'
    }
    function click1()
    {
         window.location.pathname = '/Assitfy/login'
    }
    function login()
    {
        window.location.pathname ='/Assitfy/login'
    }
    return(
       
        <nav>
            <div className='parent1'>
            <div className="log-sign">
                <button  className="b1">ابدأ</button> 
                {
                    varw === "LogoutButton" ?
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
                     varw === 'LogoutButton' ?
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