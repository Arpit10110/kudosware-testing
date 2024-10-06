import React from 'react'
import "./Navbar.css"
//img
import logo from "../../assets/logo.png"
//imports
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"
import { NavLink } from 'react-router-dom'
import {useSelector} from "react-redux"
import PersonIcon from '@mui/icons-material/Person';
//icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const { User_id } = useSelector(state => state.tinyclodeatil);
  const { Cart } = useSelector(state => state.tinyclodeatil);
  return (
   <>
   <div className="navtop">
    <h3>TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 💚 EASILY SAVE MONEY WHILST CREATING A SUSTAINABLE WARDROBE 🌍</h3>
   </div>
   <nav>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="midlenav-links">
      <NavLink to="/" >Home</NavLink> 
      <HashLink to="/#rent">Why Rent?</HashLink>
      <NavLink to="/clean-out-closet">Clean Out Closet</NavLink>
      <NavLink to="/about" >About Us</NavLink>
      <NavLink to="/store">Store</NavLink>
      <HashLink to="/#contact">Contact Us</HashLink>
      <Link to="/cart" className="cart-link">
        <ShoppingCartIcon className="cart-icon" />
        <span>{Cart.length}</span>
      </Link>
    </div>
    {
      User_id == "" ?  <div className="lastnav-link">
      <Link to="/login" >Login/Sign Up</Link>
    </div> :  <div className="Profile-link">
      <Link to="/profile" ><PersonIcon className='profile-icon' /> </Link>
    </div>
    }
   </nav>
   </>
  )
}

export default Navbar
