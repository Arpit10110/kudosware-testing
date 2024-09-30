import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// pages
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import CleanOutCloset from "./Pages/CleanOutCloset.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Fpassword from "./Pages/Fpassword.jsx";
import Profile from "./Pages/Profile.jsx";
import SuccesSignup from "./Pages/SuccesSignup.jsx";
// Style
import "./Style/Style.css";

// This component must be inside the Router to use useLocation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      {/* ScrollToTop is now inside the Router */}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clean-out-closet' element={<CleanOutCloset />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fpassword" element={<Fpassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/successignup" element={<SuccesSignup/>} />
      </Routes>
    </Router>
  );
}

export default App;
