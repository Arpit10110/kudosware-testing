import React from 'react'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Section1 from "../Components/Section1/Section1.jsx"
import Section2 from "../Components/Section2/Section2.jsx"
import Section3 from "../Components/Section3/Section3.jsx"
import Section4 from "../Components/Section4/Section4.jsx"
import Section5 from "../Components/Section5/Section5.jsx"
import Section6 from "../Components/Section6/Section6.jsx"
import Section7 from "../Components/Section7/Section7.jsx"
import Section8 from "../Components/Section8/Section8.jsx"
import ContactUs from "../Components/ContactUs/ContactUs.jsx"
import Footer from "../Components/Footer/Footer.jsx"
const Home = () => {
  return (
    <>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/> 
    <Section6/>
    <Section7/>
    <Section8/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home
