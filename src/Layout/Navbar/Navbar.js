import React from "react";
import "./Navbar.scss";
import Logo from "./../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" alt="logo-img" src={Logo} />
      <div className="links">
        <p>Pricing</p>
        <p>Product</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Community</p>
      </div>
      <button className="rounded-orange-button">Get Started</button>
    </div>
  );
};

export default Navbar;
