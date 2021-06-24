import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "./../../assets/images/logo.svg";
import Burger from "./../../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [burgerMenuVisibile, setBurgerMenuVisibile] = useState(false);
  return (
    <div className="navbar">
      <img className="logo" alt="logo-img" src={Logo} />
      <div className="links">
        <span>Pricing</span>
        <span>Product</span>
        <span>About Us</span>
        <span>Careers</span>
        <span>Community</span>
      </div>
      <button className="rounded-orange-button nav-button">Get Started</button>
      <div className="burger">
        <img
          className="burder-img"
          alt="burger-img"
          src={Burger}
          onClick={() => setBurgerMenuVisibile(!burgerMenuVisibile)}
        />
        {burgerMenuVisibile && (
          <div className="burger-menu">
            <span>Pricing</span>
            <span>Product</span>
            <span>About Us</span>
            <span>Careers</span>
            <span>Community</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
