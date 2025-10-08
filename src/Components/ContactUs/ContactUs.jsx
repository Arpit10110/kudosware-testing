import React from 'react'
import "./ContactUs.css"
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
//img
import contactusImg from "../../assets/contactusImg.png"
const ContactUs = () => {
    const [state, handleSubmit] = useForm("xanykgyn");
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      document.getElementById("myForm").reset();
    } 
  return (
    <>
    <div className="ContactUs" id='contact' >
        <h2>Contact Us</h2>
        <div className="contact-div">
            <form onSubmit={handleSubmit} id='myForm'    className="contactbox">
                <div className="row1">
                    <div className="Input">
                        <h3>First name</h3>
                        <input  name='FirstName' type="text" />
                    </div>
                    <div className="Input">
                        <h3>Last name </h3>
                        <input  name='LastName' type="text" />
                    </div>
                </div>
                <div className="row1">
                    <div className="Input">
                        <h3>Email address</h3>
                        <input  name='Email' type="text" />
                    </div>
                    <div className="Input">
                        <h3>Phone number</h3>
                        <input  name='Phone' type="text" />
                    </div>
                </div>
                <div className="row1">
                    <div className="Message">
                        <h3>Message</h3>
                        <textarea  name='Message' type="text" />
                    </div>
                </div>
                <div className="contactbtn">
                    <button >Send Message</button>
                </div>
            </form>
            <div className="contactImg">
                <img src={contactusImg} alt="contactusImg" />
            </div>
        </div>
    </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </>
  )
}

export default ContactUs