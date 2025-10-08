import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import "../Style/SuccesSignup.css"
const SuccesSignup = () => {
  return (
   <>
   <Navbar/>
   <div className="successignup">
        <div className='inner-succes-div' >
            <h3>Account successfully created! Please log in or go back to the home page.</h3>
            <div className='btn-successingup' >
            <Link to="/" >Go to Home Page</Link>
            <Link to="/login" >Go to Login Page</Link>
            </div>
        </div>
   </div>
   </>
  )
}

export default SuccesSignup