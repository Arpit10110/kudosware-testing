import React, { useState } from "react";
import "./Navbar.css";
//img
import logo from "../../assets/logo.png";
//imports
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
//icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { User_id } = useSelector((state) => state.tinyclodeatil);
  const { Cart } = useSelector((state) => state.tinyclodeatil);
  return (
    <>
      <div className="navtop">
        <h3>
          TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 💚 EASILY SAVE MONEY
          WHILST CREATING A SUSTAINABLE WARDROBE 🌍
        </h3>
      </div>
      <nav>
        <div className="logo">
          <img onClick={() => navigate("/")} src={logo} alt="logo" />
        </div>
        <div className="midlenav-links">
          <NavLink to="/">Home</NavLink>
          <HashLink to="/#rent">Why Rent?</HashLink>
          <NavLink to="/clean-out-closet">Clean Out Closet</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/store">Store</NavLink>
          <HashLink to="/#contact">Contact Us</HashLink>
        </div>
        <div className="Last-links">
        <Link to="/cart" className="cart-link">
            <ShoppingCartIcon className="cart-icon" />
            <span>{Cart.length}</span>
          </Link>
        {User_id == "" ? (
          <Link to="/login" className="Profile-link">
            <PersonIcon className="profile-icon" />
          </Link>
        ) : (
          <div className="Profile-link" id="Profile-link" >
            <Link to="/profile">
              <PersonIcon className="profile-icon" />{" "}
            </Link>
          </div>
        )}
        </div>
        <div className="mobile-links">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon className="MenuIcon" />
          </button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
          >
            <div className="all-links">
              <NavLink
                onClick={() => {
                  setOpen(false);
                }}
                to="/"
              >
                Home
              </NavLink>
              <HashLink
                onClick={() => {
                  setOpen(false);
                }}
                to="/#rent"
              >
                Why Rent?
              </HashLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                }}
                to="/clean-out-closet"
              >
                Clean Out Closet
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                }}
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                onClick={() => {
                  setOpen(false);
                }}
                to="/store"
              >
                Store
              </NavLink>
              <HashLink
                onClick={() => {
                  setOpen(false);
                }}
                to="/#contact"
              >
                Contact Us
              </HashLink>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/cart"
                className="cart-link"
              >
                <ShoppingCartIcon className="cart-icon" />
                <span>{Cart.length}</span>
              </Link>
              {User_id == "" ? (
                <Link to="/login">Login/Sign Up</Link>
              ) : (
                <div className="Profile-link">
                  <Link to="/profile">
                    <PersonIcon className="profile-icon" />{" "}
                  </Link>
                </div>
              )}
            </div>
          </Drawer>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
