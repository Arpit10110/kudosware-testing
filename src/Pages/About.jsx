import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import aboutusImg from "../assets/aboutusImg.png"
import aboutbackground from "../assets/aboutbackground.jpg"
import "../Style/About.css"
import Footer from '../Components/Footer/Footer'
const About = () => {
  return (
   <>
   <Navbar/>
   <div>
    <div className="about-top">
        <img className='about-back' src={aboutbackground} alt="aboutusImg" />
        <div className='about-div' >
        <div className="about-Img">
            <img src={aboutusImg} alt="aboutusImg" />
        </div>
        <div className="about-cont">
            <h2>About <span>Us</span></h2>
            <h3>We're Parents,Just Like You</h3>
        </div>
        </div>
    </div>
    <div className='about-main-cont'>
    <div className="about-sec1">
        <p>
        Welcome to TinyClo, your one-stop solution for all your baby's needs! We understand that babies grow fast, and keeping up with their clothing, toys, and equipment can be both expensive and overwhelming. That's why we're here to offer you a smarter, more sustainable way to meet those needs.
        </p>
        <p>
        At TinyClo, our mission is to make parenting easier and more affordable by providing a convenient rental service for high-quality baby clothes, toys, and equipment. Whether you're looking for the perfect outfit for your little one, educational toys to stimulate their development, or essential baby gear to make your life easier, we've got you covered.
        </p>
    </div>
    <div className="about-sec2">
    <h2>Why Choose TinyClo?</h2>
    <div className='about-point'>
        <p>
            <span>•Affordable:</span> Save money by renting instead of buying. Our service allows you to access premium baby products at a fraction of the cost, giving you more flexibility in managing your budget.
        </p>
        <p>
         <span>•Eco-Friendly:</span> Reduce waste and promote sustainable living by choosing to rent. By reusing high-quality products, you're helping us minimize environmental impact and support a greener future for our children.
        </p>
        <p>
       <span>•Convenient:</span> We offer a wide range of products to suit your baby's ever-changing needs. From clothing and toys to strollers and car seats, you can easily rent what you need when you need it. Plus, we take care of cleaning and maintenance, so you can focus on enjoying time with your little one.
        </p>
        <p>
         <span>•Quality Assurance:</span> Every item in our collection is carefully selected and thoroughly inspected to ensure it meets our high standards of quality and safety. Your baby's well-being is our top priority.
        </p>
    </div>
    </div>
    <div className="about-sec3">
        <h2>Our Story</h2>
        <p>TinyClo was born out of a desire to make parenting a little bit easier and a lot more sustainable. As parents ourselves, we know the challenges of keeping up with the constant demands of a growing baby. Our goal is to provide a practical solution that benefits both your family and the planet.</p>
        <h2>Join Our Community</h2>
        <p>At TinyClo, we believe in building a community of like-minded parents who value smart, eco-conscious choices. Join us in our mission to create a better future for our children by making thoughtful, sustainable decisions today.</p>
        <p>Thank you for choosing TinyClo. We're excited to support you and your family with the best products and service possible!</p>
    </div>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default About