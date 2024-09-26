import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Fpassbox = () => {
    const navigate=useNavigate();
  const [Email , setEmail]=useState("");
  const [Password , setPassword]=useState("");
  const [Cpassword , setCpassword]=useState("");
  const submitlogin =async(e)=>{
    e.preventDefault();
    if(Cpassword == Password){
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/fpassword`,{
              Email : Email,
              Password : Password
            })
            if(data.status == true){
                navigate("/login")
            }
            else{
              toast.error(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            }
          } catch (error) {
              console.log(error)
          } 
    }else{
        toast.error("Password and Confirm  Password are not same", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }
  }
  return (
  <>
  <div className="loginbox-main">
    <form  onSubmit={submitlogin} className="loginbox">
        <div className='login-div-input'>
          <h3>Enter Your Email ID</h3>
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}}  required/>
        </div>
        <div className='login-div-input'>
          <h3>Set New Password</h3>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
        </div>
        <div className='login-div-input'>
          <h3>Confirm Password</h3>
          <input type="password" onChange={(e)=>{setCpassword(e.target.value)}} required/> <br />
        </div>
        <div className='login-div-btn' >
        <button type='submit' >Set Password</button>
          <Link to="/signup" >Create Account</Link>
        </div>
    </form>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
  </div>
  </>
  )
}

export default Fpassbox
