import React from 'react'
import {HashRouter as Router , Routes, Route} from "react-router-dom"
// pages
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import CleanOutCloset from "./Pages/CleanOutCloset.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx"
//Style
import "./Style/Style.css"
const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/clean-out-closet' element={<CleanOutCloset/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
   </Router>
  )
}

export default App