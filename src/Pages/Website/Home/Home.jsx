
import Footer from "../../../Components/Website/Footer/Footer";
import Navbar from "../../../Components/Website/Navbar/Navbar";
import './Home.css'
import '../../../Components/Website/Media/MediaQuires.css'
import Logout from "../Logout/Logout";
//import { useEffect, useState } from "react";

export default function Home()
{
    let vare = localStorage.getItem('logout');
    let vare2 = localStorage.getItem('click');
    return(
        <div style={{position:'relative', height:'100%'}}> 

           { vare === 'LogoutButton' && vare2 === 'yes' && <Logout/>}
           
            <Navbar/>
            <div className="pSec2">
            <div className="sec2"> 
                <p className="p1">Assistify إحصل على الإقامة التركية مع</p>
                <h1>استثمر من أي مكان في العالم واحصل على الإقامة التركية</h1>
                <p className="p2">استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000 دولار أمريكي من خلال منصتنا</p>
            </div>
            </div>
            <Footer/>
        </div>
    )
}