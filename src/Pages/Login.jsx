import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import LoginTopBanner from '../Components/LoginTopBanner/LoginTopBanner.jsx'
import Loginbox from '../Components/Loginbox/Loginbox.jsx'
import Footer from '../Components/Footer/Footer'
  
const Login = () => {
  return (
    <>
    <Navbar/>
    <LoginTopBanner/>
    <Loginbox/>
    <Footer/>
    </>
  )
}

export default Login