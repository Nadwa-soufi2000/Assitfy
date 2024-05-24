
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
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/confirm' element={<Confirm/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
         <Route path='/logout' element={<Logout/>}></Route>
     </Routes>
    </>
  )
}

export default App
