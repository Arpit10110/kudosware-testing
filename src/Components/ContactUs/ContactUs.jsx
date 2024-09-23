import React from 'react'
import "./ContactUs.css"
//img
import contactusImg from "../../assets/contactusImg.png"
const ContactUs = () => {
  return (
    <div className="ContactUs" id='contact' >
        <h2>Contact Us</h2>
        <div className="contact-div">
            <div className="contactbox">
                <div className="row1">
                    <div className="Input">
                        <h3>First name</h3>
                        <input type="text" />
                    </div>
                    <div className="Input">
                        <h3>Last name </h3>
                        <input type="text" />
                    </div>
                </div>
                <div className="row1">
                    <div className="Input">
                        <h3>Email address</h3>
                        <input type="text" />
                    </div>
                    <div className="Input">
                        <h3>Phone number</h3>
                        <input type="text" />
                    </div>
                </div>
                <div className="row1">
                    <div className="Message">
                        <h3>Message</h3>
                        <input type="text" />
                    </div>
                </div>
                <div className="contactbtn">
                    <button>Send Message</button>
                </div>
            </div>
            <div className="contactImg">
                <img src={contactusImg} alt="contactusImg" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs