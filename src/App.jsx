
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Website/Home/Home'
import Login from './Pages/Website/Login/Login'
import Confirm from './Pages/Website/Confirm/Confirm'
import Signup from './Pages/Website/Signup/Signup'
import Logout from './Pages/Website/Logout/Logout'

function App() {

  return (
    <>
     <Routes>
         <Route path='/' element={<Home/>} ></Route>
         <Route path='https://assitfy-nadwa-soufis-projects.vercel.app/login' element={<Login/>}></Route>
         <Route path='https://assitfy-nadwa-soufis-projects.vercel.app/confirm' element={<Confirm/>}></Route>
         <Route path='https://assitfy-nadwa-soufis-projects.vercel.app/signup' element={<Signup/>}></Route>
         <Route path='https://assitfy-nadwa-soufis-projects.vercel.app/logout' element={<Logout/>}></Route>
     </Routes>
    </>
  )
}

export default App
