import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import storebanner from "../assets/store-banner.png"  
import allstorelink from "../assets/all-store-link.png"  
import storeboyslink from "../assets/store-boys-link.png"  
import storegirlslink from "../assets/store-girls-link.png"  
import storeacclink from "../assets/store-acc-link.png"  
import storetoyslink from "../assets/store-toys-link.png"  
import "../Style/Store.css"
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
const Store = () => {
  return (
   <>
   <Navbar/>
    <div className="store-main">
      <div className="store-top-banner">
      <img src={storebanner} alt="storebanner" />
      </div>
      <div className="store-nav">
        <Link to="/store" className='store-link' >
        <img src={allstorelink} alt="all" />
        <h6>All</h6>
        </Link>
        <Link to="/store/boys" className='store-link' >
        <img src={storeboyslink} alt="boys" />
        <h6>Boys</h6>
        </Link>
        <Link to="/store/girls" className='store-link' >
        <img src={storegirlslink} alt="boys" />
        <h6>Girls</h6>
        </Link>
        <Link to="/store/accessories" className='store-link' >
        <img src={storeacclink} alt="accessories" />
        <h6>Accessories</h6>
        </Link>
        <Link to="/store/toys" className='store-link' >
        <img src={storetoyslink} alt="toys" />
        <h6>Toys</h6>
        </Link>
      </div>
    </div>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Store
