import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ProfileBox from '../Components/ProfileBox/ProfileBox.jsx'
import PAddressBox from '../Components/PAddressBox/PAddressBox.jsx'
import SignupTopBanner from "../Components/SignupTopBanner/SignupTopBanner"
import LoyalityPointsBox from "../Components/LoyalityPointsBox/LoyalityPointsBox.jsx"
import {Link} from "react-router-dom"
import "../Style/Profile.css"
const Profile = () => {
  return (
   <>
   <Navbar/>
   <SignupTopBanner name={"My Account"} />
    <div className="profile-main">
      <div className="profile-leftBoxs">
      <div className="loyalityBox-profile">
        <h2>Loyalty Program</h2>
        <p>As a subscriber, you'll earn points every month. Plus earn bonus points too!</p>
        <Link>How to earn points?</Link>
      </div>
      <div className="loyalityBox-profile">
        <h2>Ready to Swap?</h2>
        <p>We know they (out)grow so fast, so we are here when you're ready to swap. Whether you need to exchange a few items that they have outgrown or need a new season refresh, we are here to curate a box that works for your family.</p>
        <Link>Swap Your Clothes</Link>
      </div>
      </div>
      <div className="profile-rightBoxs">
          <ProfileBox/>
          <PAddressBox />
          <LoyalityPointsBox />
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Profile
