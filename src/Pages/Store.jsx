import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import storebanner from "../assets/store-banner.png";  
import allstorelink from "../assets/all-store-link.png";  
import storeboyslink from "../assets/store-boys-link.png";  
import storegirlslink from "../assets/store-girls-link.png";  
import storeacclink from "../assets/store-acc-link.png";  
import storetoyslink from "../assets/store-toys-link.png";  
import "../Style/Store.css";
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Store = () => {
  const location = useLocation(); // Get the current path

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Navbar />
      <div className="store-main">
        <div className="store-top-banner">
          <img src={storebanner} alt="storebanner" />
        </div>
        <div className="store-nav">
          <Link
            to="/store"
            className='store-link'
            style={isActive('/store') ? { border: '2px solid #e2ff00' } : {}}
          >
            <img src={allstorelink} alt="all" />
            <h6>All</h6>
          </Link>
          <Link
            to="/store/boys"
            className='store-link'
            style={isActive('/store/boys') ? { border: '2px solid #0098ff' } : {}}
          >
            <img src={storeboyslink} alt="boys" />
            <h6>Boys</h6>
          </Link>
          <Link
            to="/store/girls"
            className='store-link'
            style={isActive('/store/girls') ? { border: '2px solid #ea00ff' } : {}}
          >
            <img src={storegirlslink} alt="girls" />
            <h6>Girls</h6>
          </Link>
          <Link
            to="/store/accessories"
            className='store-link'
            style={isActive('/store/accessories') ? { border: '2px solid green' } : {}}
          >
            <img src={storeacclink} alt="accessories" />
            <h6>Accessories</h6>
          </Link>
          <Link
            to="/store/toys"
            className='store-link'
            style={isActive('/store/toys') ? { border: '2px solid red' } : {}}
          >
            <img src={storetoyslink} alt="toys" />
            <h6>Toys</h6>
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Store;
