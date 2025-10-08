import React from 'react'
import "./LoginTopBanner.css"
import topbannerImg from "../../assets/top-bannerImg.png"
const LoginTopBanner = () => {
  return (
   <>
      <div className="logintop-banner">
        <img src={topbannerImg} alt="topbannerImg" />
        <div>
        <h2>Login</h2>
        <h6></h6>
        </div>
      </div>
   </>
  )
}

export default LoginTopBanner
