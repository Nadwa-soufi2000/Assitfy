
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Website/Home/Home'
import Login from './Pages/Website/Login/Login'
import Confirm from './Pages/Website/Confirm/Confirm'
import Signup from './Pages/Website/Signup/Signup'
import Refresh from './Pages/Website/Refresh/Refresh'

function App() {
 // const location = useLocation();

  return (
    <>
     <Routes >
         <Route element={<Refresh/>}>
            <Route path='/' element={<Home/>} ></Route>
         </Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/confirm' element={<Confirm/>}></Route>
         <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
    </>
  )
}

export default App
