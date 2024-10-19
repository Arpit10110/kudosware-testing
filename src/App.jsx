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
import Store from "./Pages/Store.jsx";
import AllStore from "./Pages/AllStore.jsx";
import BoysStore from "./Pages/BoysStore.jsx";
import GirlsStore from "./Pages/GirlsStore.jsx";
import ToysStore from "./Pages/ToysStore.jsx";
import AccessoriesStore from "./Pages/AccessoriesStore.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import Success from "./Pages/Success";
import Choosemembership from "./Pages/Choosemembership.jsx";
import Blogs from "./Pages/Blogs.jsx";
//components
import  {Protected,UnRProtected} from "./Components/protected/Protected.jsx"
// Style
import "./Style/Style.css";

// This component must be inside the Router to use useLocation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("/store")) {
      window.scrollTo(0, 0);
    }else{
      window.scrollTo(500,500);
    }
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      {/* ScrollToTop is now inside the Router */}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<  Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clean-out-closet' element={<CleanOutCloset />} />
        <Route path="/login" element={<Protected Component={Login}  />} />
        <Route path="/signup" element={<Protected Component={Signup} />} />
        <Route path="/fpassword" element={<Protected Component={Fpassword} />} />
        <Route path="/profile" element={<UnRProtected Component={Profile}/>} />
        <Route path="/successignup" element={<SuccesSignup/>} />
        <Route path="/store" element={<Store/>}>
          <Route path="/store" element={<AllStore/>} />
          <Route path="/store/boys" element={<BoysStore/>} />
          <Route path="/store/girls" element={<GirlsStore/>} />
          <Route path="/store/toys" element={<ToysStore/>} />
          <Route path="/store/accessories" element={<AccessoriesStore/>} />
        </Route>
        <Route path='/cart' element={<Cart/>}  />
        <Route path="/checkout" element={<UnRProtected Component={Checkout}/>}  />
        <Route path="/success" element={<Success/>} />
        <Route path="/choose-membership" element={<Choosemembership/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </Router>
  );
}

export default App;
