import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signbox.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signupbox = () => {
  const navigate= useNavigate();
  const [Fname, setFname] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [Address1, setAddress1] = useState('');
  const [Landmark, setLandmark] = useState('');
  const [PostalCode, setPostalCode] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');

  const submithandel = async (e) => {
    e.preventDefault();
    try {
      const address = [
        {
          address1: Address1,
          city: City,
          province: State,
          phone: Phone,
          zip: PostalCode,
          first_name: Fname,
          landmark: Landmark,
          country: 'IN'
        }
      ];

      const {data} = await axios.post(`${import.meta.env.VITE_Port}/signup`, {
        Fname,
        Email,
        Phone,
        Password,
        address
      });
      console.log(data);
      if(data.status== false){
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
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="loginbox-main">
        <form onSubmit={submithandel} className="loginbox">
          <div className="login-div-input">
            <h3>Full Name</h3>
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Phone no.</h3>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Email</h3>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Password</h3>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Address</h3>
            <input
              type="text"
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
          </div>
          <div className="signup-div-main">
            <div className="signup-div-input">
              <h3>Landmark</h3>
              <input
                type="text"
                onChange={(e) => setLandmark(e.target.value)}
                required
              />
            </div>
            <div className="signup-div-input">
              <h3>Postal Code</h3>
              <input
                type="text"
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signup-div-main">
            <div className="signup-div-input">
              <h3>City</h3>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="signup-div-input">
              <h3>State</h3>
              <input
                type="text"
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="signup-div-btn">
            <button type="submit">Create Account</button>
            <Link to="/login">Login</Link>
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
  );
};

export default Signupbox;
