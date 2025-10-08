import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./loginbox.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Loginbox = () => {
  const navigate= useNavigate();
  const dispatch=useDispatch()
  const [Email , setEmail]=useState("");
  const [Password , setPassword]=useState("");
  const [open, setOpen] = React.useState(false);
  const submitlogin =async(e)=>{
    e.preventDefault();
    setOpen(true);
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_Port}/login`,{
        Email : Email,
        Password : Password
      })
      console.log("this is the output",data);
      if(data.status== false){
        setOpen(false);
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
      }else{
        const shopifydata=data.data;
         setOpen(false);
        navigate("/");
        dispatch({
          type:"Profile",
          payload:{
            id:shopifydata.id
          }
          ,
        })
      }
    } catch (error) { 
      console.log("this is the output",error);

    } 
  }
  return (
  <>
  <div className="loginbox-main">

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

    <form  onSubmit={submitlogin} className="loginbox">
        <div className='login-div-input'>
          <h3>Enter Your Email ID</h3>
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}}  required/>
        </div>
        <div className='login-div-input'>
          <h3>Password</h3>
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}} required/> <br />
          <Link to="/fpassword" >Forgot your password?</Link>
        </div>
        <div className='login-div-btn' >
          <button type='submit' >Login</button>
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

export default Loginbox