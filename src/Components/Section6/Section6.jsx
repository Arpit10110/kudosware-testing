import React from 'react'
import "./Section6.css"
//img
import sec6Img from "../../assets/sec6Img.png"
import { useNavigate } from 'react-router-dom'
const Section6 = () => {
  const  naviagte  = useNavigate();
  return (
    <>
    <div className="section6">
        <h2>Cleanliness Guarantee</h2>
        <div className="section6-div">
            <div className="sec6-cont">
                <div className="sec6-para">
                <p>After each rental, we professionally clean and safely sanitise clothes, sealing them with our cleanliness guarantee, ready for the next renting family to love.</p>
                <p>Clothes that are no longer in rentable condition are either donated or recycled. So you can take comfort knowing that we’ll do all we can to give clothes a new lease of life, with no clothes ever going to landfill</p>
                </div>
                <div className="sec6-btn">
                <button onClick={()=>naviagte("/choose-membership")} >Start Membership</button>
            </div>
            </div>
            <div className="sec6Img">
                <img src={sec6Img} alt="sec6Img" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Section6