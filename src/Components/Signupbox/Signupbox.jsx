import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signbox.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const Signupbox = () => {
  const navigate = useNavigate();
  const [Fname, setFname] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [Address1, setAddress1] = useState(' ');
  const [Landmark, setLandmark] = useState(' ');
  const [PostalCode, setPostalCode] = useState(' ');
  const [City, setCity] = useState(' ');
  const [State, setState] = useState(' ');
  const [open, setOpen] = useState(false);

  // Handle Postal Code change
  const handlePostalCodeChange = async (e) => {
    const pincode = e.target.value;
    setPostalCode(pincode);

    // Only fetch data if the postal code is 6 digits (valid for Indian PIN)
    if (pincode.length === 6) {
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = response.data;

        if (data[0].Status === "Success") {
          const postOffice = data[0].PostOffice[0];
          setCity(postOffice.District);  // Set the city
          setState(postOffice.State);    // Set the state
        } else {
          toast.error("Invalid Postal Code", {
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
        console.error("Error fetching postal code data:", error);
      }
    }
  };

  const submithandel = async (e) => {
    e.preventDefault();
    setOpen(true);
    try {
      let value = false;
      if (Address1.trim() === '' || PostalCode.trim() === '' || State.trim() === '' || City.trim() === '') {
        value=false;
      } else {
         value =true;
      }
      
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

      const { data } = await axios.post(`${import.meta.env.VITE_Port}/signup`, {
        Fname,
        Email,
        Phone,
        Password,
        address,
        AddressGiven:value
      });
      console.log(data);
      if (data.status === false) {
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
      } else {
        setOpen(false);
        navigate("/successignup");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="loginbox-main">
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <form onSubmit={submithandel} className="loginbox">
          <div className="login-div-input">
            <h3>Full Name<span>*</span></h3>
            <input
              type="text"
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Phone no.<span>*</span></h3>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Email<span>*</span></h3>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-div-input">
            <h3>Create Password<span>*</span></h3>
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
            />
          </div>
          <div className="signup-div-main">
            <div className="signup-div-input">
              <h3>Landmark</h3>
              <input
                type="text"
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>
            <div className="signup-div-input">
              <h3>Postal Code</h3>
              <input
                type="text"
                value={PostalCode}
                onChange={handlePostalCodeChange}
              />
            </div>
          </div>
          <div className="signup-div-main">
            <div className="signup-div-input">
              <h3>City</h3>
              <input
                type="text"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="signup-div-input">
              <h3>State</h3>
              <input
                type="text"
                value={State}
                onChange={(e) => setState(e.target.value)}
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
