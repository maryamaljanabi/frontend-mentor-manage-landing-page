import React from "react";
import "./Navbar.scss";
import Logo from "./../../assets/images/logo.svg";

const Navbar = () => {
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
      <button className="rounded-orange-button">Get Started</button>
    </div>
  );
};

export default Navbar;
