
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
         <Route path='/Assitfy/login' element={<Login/>}></Route>
         <Route path='/Assitfy/confirm' element={<Confirm/>}></Route>
         <Route path='/Assitfy/signup' element={<Signup/>}></Route>
         <Route path='/Assitfy/logout' element={<Logout/>}></Route>
     </Routes>
    </>
  )
}

export default App
