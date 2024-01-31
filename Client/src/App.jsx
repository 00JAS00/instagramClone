
import {Routes, Route} from 'react-router-dom'

//? hooks
import './App.css'
// import { useState } from 'react'

//components
import Login from './components/Login/Login'
import SignUp from './components/SingUp/SingUp'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/singup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
