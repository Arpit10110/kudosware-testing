import React from 'react'
import topbannerImg from "../../assets/top-bannerImg.png"
const SignupTopBanner = ({name}) => {
  return (
    <>
      <div className="logintop-banner">
        <img src={topbannerImg} alt="topbannerImg" />
        <div>
        <h2>{name}</h2>
        <h6></h6>
        </div>
      </div>
   </>
  )
}

export default SignupTopBanner
