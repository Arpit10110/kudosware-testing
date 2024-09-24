import React from 'react'
import { Link } from 'react-router-dom'
import "./signbox.css"
const Signupbox = () => {
  return (
    <>
    <div className="loginbox-main">
      <form className="loginbox">
        <div className="signup-div-main">
          <div className='signup-div-input'>
            <h3>First Name</h3>
            <input type="text" />
          </div>
          <div className='signup-div-input'>
            <h3>Last Name</h3>
            <input type="text" />
          </div>
        </div>
          <div className='login-div-input'>
            <h3>Email</h3>
            <input type="text"  required/>
          </div>
          <div className='login-div-input'>
            <h3>Password</h3>
            <input type="password" required/> <br />
          </div>
          <div className='login-div-btn' >
            <button type='submit' >Create Account</button>
            <Link to="/login" >Login</Link>
          </div>
      </form>
    </div>
    </>
  )
}

export default Signupbox
