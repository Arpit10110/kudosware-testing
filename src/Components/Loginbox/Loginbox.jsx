import React from 'react'
import { Link } from 'react-router-dom'
import "./loginbox.css"
const Loginbox = () => {
  return (
  <>
  <div className="loginbox-main">
    <form className="loginbox">
        <div className='login-div-input'>
          <h3>Enter Your Email ID</h3>
          <input type="text"  required/>
        </div>
        <div className='login-div-input'>
          <h3>Password</h3>
          <input type="password" required/> <br />
          <Link>Forgot your password?</Link>
        </div>
        <div className='login-div-btn' >
          <button type='submit' >Login</button>
          <Link to="/signup" >Create Account</Link>
        </div>
    </form>
  </div>
  </>
  )
}

export default Loginbox