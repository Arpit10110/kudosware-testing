import React, { useState } from 'react';
import "./Section4.css";
// Images
import sec4box1 from "../../assets/sec4box1.png";
import sec4box2 from "../../assets/sec4box2.png";
import sec4box3 from "../../assets/sec4box3.png";
import SliderCompo from "../Slider/Slider.jsx";

const Section4 = () => {
    const [selectedButton, setSelectedButton] = useState("costSaving");

    // Button click handlers
    const handleCostSavingClick = () => {
        setSelectedButton("costSaving");
    };

    const handleEnvSavingClick = () => {
        setSelectedButton("envSaving");
    };

    const handleSpaceSavingClick = () => {
        setSelectedButton("spaceSaving");
    };

    return (
        <div className="section4" id='rent'>
            <h2>Why Rent?</h2>
            <div className="sec3btn-div">
                <button 
                    onClick={handleCostSavingClick}
                    style={{ backgroundColor: selectedButton === "costSaving" ? "#FCEBA3" : "#D9D9D9" }}
                >
                    Cost Saving
                </button>
                <button 
                    onClick={handleEnvSavingClick}
                    style={{ backgroundColor: selectedButton === "envSaving" ? "#FCEBA3" : "#D9D9D9" }}
                >
                    Environment Saving
                </button>
                <button 
                    onClick={handleSpaceSavingClick}
                    style={{ backgroundColor: selectedButton === "spaceSaving" ? "#FCEBA3" : "#D9D9D9" }}
                >
                    Space Saving
                </button>
            </div>
            {selectedButton === "costSaving" && 
                <SliderCompo cont={"Babies typically outgrow 6 or more sizes in their first year! Add in 3 different seasons, special occasions, and several outfit changes daily, now that's a LOT of clothes!"} />
            }
            {selectedButton === "envSaving" && 
                <SliderCompo cont={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate accusantium eveniet sunt aliquid molestias a dolorum necessitatibus, inventore odit?"} />
            }
            {selectedButton === "spaceSaving" && 
                <SliderCompo cont={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate accusantium eveniet sunt aliquid molestias a dolorum necessitatibus, inventore odit?"} />
            }

            <div className="section3-ContBox">
                <div className="sec3box">
                    <div className="sec3box-img">
                        <img src={sec4box1} alt="Swap Anytime" />
                    </div>
                    <div className="secbox-cont">
                        <h3>SWAP ANYTIME</h3>
                        <p>When you're ready to swap, we'll send new looks right away using our pre-paid, reusable shipping kit. It’s that easy!</p>
                    </div>
                </div>
                <div className="sec3box">
                    <div className="sec3box-img">
                        <img src={sec4box2} alt="Curate & Ship" />
                    </div>
                    <div className="secbox-cont">
                        <h3>CURATE & SHIP</h3>
                        <p>Pick a plan and share your style preferences. We’ll customize and ship your little’s capsule within 7 business days.</p>
                    </div>
                </div>
                <div className="sec3box">
                    <div className="sec3box-img">
                        <img src={sec4box3} alt="Grow in Style" />
                    </div>
                    <div className="secbox-cont">
                        <h3>GROW IN STYLE</h3>
                        <p>Dress your little in their mix-and-match wardrobe as long as you'd like. When you're ready to swap, switch one item or everything. It's you!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
