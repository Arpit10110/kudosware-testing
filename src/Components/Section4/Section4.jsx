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

    const coastsavingval = [
        {age: '0-3 months', AverageSpent: "₹12K", TinyClo: "₹4K" },
        { age: '3-6 months', AverageSpent: "₹24K", TinyClo: "₹8K" },
        { age: '6-9 months', AverageSpent: "₹36K", TinyClo: "₹12K" },
        { age: '9-12 months', AverageSpent: "₹48K", TinyClo: "₹16K" },
        { age: '12-18 months', AverageSpent: "₹60K", TinyClo: "₹20K" },
        { age: '18-24 months', AverageSpent: "₹72K", TinyClo: "₹24K" },
    ]
    const envsavingval = [
        {age: '0-3 months', TinyClo: "1 Tree Saved + 200L Water Saved" },
        { age: '3-6 months', TinyClo: "2 Tree Saved + 300L Water Saved" },
        { age: '6-9 months', TinyClo: "3 Tree Saved + 400L Water Saved" },
        { age: '9-12 months', TinyClo: "4 Tree Saved + 500L Water Saved" },
        { age: '12-18 months', TinyClo: "5 Tree Saved + 600L Water Saved" },
        { age: '18-24 months', TinyClo: "6 Tree Saved + 700L Water Saved" },
    ]
    const spacesavingval = [
        {age: '0-3 months', TinyClo: "Half Wardrobe Saved" },
        { age: '3-6 months', TinyClo: "Full Wardrobe Saved" },
        { age: '6-9 months', TinyClo: "Wardrobe and Sofa Saved" },
        { age: '9-12 months', TinyClo: "Half Living Room Saved" },
        { age: '12-18 months', TinyClo: "Full Living Room Saved" },
        { age: '18-24 months', TinyClo: "Guest Room Saved" },
    ]

    return (
        <div className="section4" id='rent'>
            <h2>Why Rent?</h2>
            <div className="sec3btn-div">
                <button 
                    onClick={handleCostSavingClick}
                    style={{ backgroundColor: selectedButton === "costSaving" ? "#FCEBA3" : "#F5F5F6" }}
                >
                    Cost Savings
                </button>
                <button 
                    onClick={handleEnvSavingClick}
                    style={{ backgroundColor: selectedButton === "envSaving" ? "#FCEBA3" : "#F5F5F6" }}
                >
                    Environment Savings
                </button>
                <button 
                    onClick={handleSpaceSavingClick}
                    style={{ backgroundColor: selectedButton === "spaceSaving" ? "#FCEBA3" : "#F5F5F6" }}
                >
                    Space Savings
                </button>
            </div>
            {selectedButton === "costSaving" && 
                <SliderCompo  twobtn={true} Slidevalue={coastsavingval} cont={"Babies typically outgrow 6 or more sizes in their first year! Add in 3 different seasons, special occasions, and several outfit changes daily, now that's a LOT of clothes!"} />
            }
            {selectedButton === "envSaving" && 
                <SliderCompo twobtn={false} Slidevalue={envsavingval} cont={"Producing 1 kg of cotton clothes requires 20,000 liters of water and emits 2.6 kg of carbon. Now imagine the environmental toll of clothing and toys for a baby’s entire year—hundreds of thousands of liters of water wasted and significant carbon emissions."} />
            }
            {selectedButton === "spaceSaving" && 
                <SliderCompo  twobtn={false} Slidevalue={spacesavingval} cont={"We all know how a house looks with a baby—clothes piling up, toys scattered everywhere, and bulky equipment taking over every corner. Most of it becomes useless in no time as babies outgrow them faster than you can organize."} />
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
