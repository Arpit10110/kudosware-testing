import React from 'react'
import "./Section4.css"
//img
import  sec4Img from "../../assets/sec4Img.png"
import sec4box1 from "../../assets/sec4box1.png"
import sec4box2 from "../../assets/sec4box2.png"
import sec4box3 from "../../assets/sec4box3.png"
const Section4 = () => {
  return (
   <>
   <div className="section4">
    <h2>Why Rent?</h2>
    <div className="sec3btn-div">
        <button>Cost Saving</button>
        <button>Environment Saving</button>
        <button>Space Saving</button>
    </div>
    <div className="doyouknow">
        <div className="sec4-cont">
            <h3>DID YOU KNOW?</h3>
            <p>Babies typically outgrow 6 or more sizes in their first year! Add in 3 different seasons, special occasions, and several outfit changes daily, now that's a LOT of clothes!</p>
            <img src={sec4Img} alt="sec4Img" />
            <div className="sec4btn-div">
                <button>AVERAGE SPENT: $250</button>
                <button>TINYCLO: $32</button>
            </div>
        </div>
    </div>
    <div className="section3-ContBox">
        <div className="sec3box">
            <div className="sec3box-img">
                <img src={sec4box1} alt="sec3box1" />
            </div>
            <div className="secbox-cont">
                <h3>SWAP ANYTIME</h3>
                <p>When you're ready to swap, we'll send new looks right away.your previous looks using our pre-paid, reusable shipping kit. It’s that easy!</p>
            </div>
        </div>
        <div className="sec3box">
            <div className="sec3box-img">
                <img src={sec4box2} alt="sec3box1" />
            </div>
            <div className="secbox-cont">
                <h3>CURATE & SHIP</h3>
                <p>Pick a plan and share your style preferences. We’ll customize and ship your little’s capsule within 7 business days.</p>
            </div>
        </div>
        <div className="sec3box">
            <div className="sec3box-img">
                <img src={sec4box3} alt="sec3box1" />
            </div>
            <div className="secbox-cont">
                <h3>GROW IN STYLE</h3>
                <p>Dress your little in their mix-and-match wardrobe as long as you'd like. When you're ready to swap, switch one item or everything. It's you!</p>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Section4
