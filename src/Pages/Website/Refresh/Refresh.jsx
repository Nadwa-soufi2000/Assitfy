import { useContext, useEffect } from "react"
import { User } from "../../../Components/Website/ContextApi/ContextApi"
import Cookies from "universal-cookie";
import axios from "axios";
import { Outlet } from "react-router-dom";

export default function Refresh()
{
    const user = useContext(User);
    const token = user.auth.token;
   // const cookie = new Cookies();
    const cookie2 = new Cookies();
   // const getToken = cookie2.get("Bearer");
    const getrefreshToken = cookie2.get("Bearer2");
    

    useEffect(() => {
       async function refresh()
       {
           try { 
            let response = await axios.get("https://task5-rama-eisawi.trainees-mad-s.com/api/auth/refresh-token" , 
                {
                    headers : {
                        "Content-Type" : "application/json" ,
                        "Accept" : "application/json" ,
                        Authorization : "Bearer " + getrefreshToken 
                    }
                }
            )
            console.log(response)
            cookie2.set("Bearer2" , response.data.refresh_token)
            user.setAuth((prev) => {
                return {...prev, token: response.data.refresh_token}
            })
           }catch(err) {
               console.log(err)
           }
       }
         if(!token) 
            {
                refresh()
            }
    } ,[])
    return(
        <Outlet />
    )
}