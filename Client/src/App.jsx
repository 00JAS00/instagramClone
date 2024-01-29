
import {Routes, Route} from 'react-router-dom'

//? hooks
import './App.css'
// import { useState } from 'react'

//components
import Login from './components/Login/Login'
import SignUp from './components/SingUp/SingUp'

function App() {

  return (
    <main>
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/singup' element={<SignUp/>}/>
      </Routes>
    </main>
  )
}

export default App
