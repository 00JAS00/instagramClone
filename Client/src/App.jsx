
import {Routes, Route} from 'react-router-dom'

//? hooks
import './App.css'
import { useState } from 'react'

//components
import Login from './components/Login/Login'

function App() {

  return (
    <main>
      <Routes>

        <Route path='/' element={<Login/>}/>


      </Routes>
    </main>
  )
}

export default App
