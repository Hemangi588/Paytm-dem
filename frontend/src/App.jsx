import{BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Heading } from '../Components/heading'
import { SubHeading } from '../Components/subHeading'
import { Suspense } from 'react'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Dashboard from '../pages/Dashboard'
import SendMoney from '../pages/SendMoney'

{import('tailwindcss').Config}
function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/send' element={<SendMoney/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
    
  
  )

}


export default App
