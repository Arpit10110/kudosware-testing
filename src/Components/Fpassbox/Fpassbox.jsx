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
  const [Otp,SetOtp]=useState("");
  const [backendOTP,SetbackendOTP ] = useState("");


  const [EmailDiv,SetEmailDiv] =useState(false);
  const [ShowPasswordDiv,SetShowPasswordDiv]=useState(false);
  const [OtpDiv,SetOtpDiv] = useState(false);


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

  const sendotp = async()=>{
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_Port}/sendotproute`,{
          email:Email
        })
        console.log(data);
        if(data.success == true){
          toast.success("OTP SEND SUCCESSFULLY", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            SetEmailDiv(true);
            SetOtpDiv(true)
            SetbackendOTP(data.otp);
        }else{
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
      toast.error("Please Try again ", {
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

  const verifyotp = ()=>{
    if(backendOTP == Otp){
      SetOtpDiv(false);
      SetShowPasswordDiv(true);
    }else{
      toast.error("Invalid OTP", {
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
    <div className="loginbox">

      {
        EmailDiv == true ? " ":
      <div>
        <div className='login-div-input'>
          <h3>Enter Your Email ID</h3>
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}}  required/> <br/>
        </div>
        <div className='login-div-btn' >
          <button onClick={sendotp} > Send OTP </button>
          </div>
      </div>
      }



      {
        OtpDiv == true ?
      <div>
        <div className='login-div-input'>
          <h3>Enter the OTP  sent to {Email}</h3>
          <input type="text" onChange={(e)=>{SetOtp(e.target.value)}}  required/> <br/>
        </div>
        <div className='login-div-btn' >
          <button onClick={verifyotp} > Verify OTP </button>
          </div>
      </div>:" "
      }





      {
          ShowPasswordDiv==true?
          <div>
          <div className='login-div-input'>
            <h3>Set New Password</h3>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} required/><br />
          </div>
          <div className='login-div-input'>
            <h3>Confirm Password</h3>
            <input type="password" onChange={(e)=>{setCpassword(e.target.value)}} required/> <br />
          </div>
          <div className='login-div-btn' >
          <button onClick={submitlogin} >Set Password</button>
          </div>
        </div>: ""
      }


    </div>
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
