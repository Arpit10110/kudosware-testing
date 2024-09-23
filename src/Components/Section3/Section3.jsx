import React from 'react'
import "./Section3.css"
//img
import Section3Img from "../../assets/Section3Img.png"
import sec3box1 from "../../assets/sec3box1.png"
import sec3box2 from "../../assets/sec3box2.png"
import sec3box3 from "../../assets/sec3box3.png"
const Section3 = () => {
  return (
   <>
   <div className="section3">
    <h2>How it Works?</h2>
    <div className="section3-Img">
        <img src={Section3Img} alt="Section3Img" />
    </div>
    <div className="section3-ContBox">
        <div className="sec3box">
            <div className="sec3box-img">
                <img src={sec3box1} alt="sec3box1" />
            </div>
            <div className="secbox-cont">
                <h3>RENT</h3>
                <p>Pick one of our plans. Choose from our curated everyday essentials, or handpick outfits from our premium brands.</p>
            </div>
        </div>
        <div className="sec3box">
            <div className="sec3box-img">
                <img src={sec3box2} alt="sec3box1" />
            </div>
            <div className="secbox-cont">
                <h3>RETURN</h3>
                <p>When your little one outgrows their clothes, simply pop them back to us in the reusable bag. For FREE, of course</p>
            </div>
        </div>
        <div className="sec3box">
            <div className="sec3box-img">
                <img src={sec3box3} alt="sec3box1" />
            </div>
            <div className="secbox-cont">
                <h3>SWAP SIZES</h3>
                <p>Easily pick your next bundle of clothes in your account. They will arrive super quickly, and always with our Cleanliness Guarantee!</p>
            </div>
        </div>
    </div>
    <div className="sec3btn">
    <button>Start Membership</button>
    </div>
   </div>
   </>
  )
}

export default Section3