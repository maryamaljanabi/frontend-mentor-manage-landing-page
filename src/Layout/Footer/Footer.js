import React from "react";
import "./Footer.scss";
import ManageLogo from "./../../assets/images/logo.svg";
import FacebookIcon from "./../../assets/images/icon-facebook.svg";
import TwitterIcon from "./../../assets/images/icon-twitter.svg";
import InstagramIcon from "./../../assets/images/icon-instagram.svg";
import PinterestIcon from "./../../assets/images/icon-pinterest.svg";
import YoutubeIcon from "./../../assets/images/icon-youtube.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-banner">
        <h3>Simplify how your team works today.</h3>
        <button className="rounded-orange-button inverted-rounded-orange-button">
          Get Started
        </button>
      </div>
      <div className="bottom-footer">
        <div className="bottom-mobile">
          <img src={ManageLogo} alt="manage-footer-logo" />
          <p>Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="left-logo">
          <img
            src={ManageLogo}
            className="manage-footer-logo"
            alt="manage-footer-logo"
          />
          <div className="social-media">
            <img src={FacebookIcon} alt="facebook-icon" />
            <img src={YoutubeIcon} alt="facebook-icon" />
            <img src={TwitterIcon} alt="facebook-icon" />
            <img src={PinterestIcon} alt="facebook-icon" />
            <img src={InstagramIcon} alt="facebook-icon" />
          </div>
        </div>
        <div className="web-links-container">
          <div className="web-links-1">
            <p>Home</p>
            <p>Pricing</p>
            <p>Products</p>
            <p>About Us</p>
          </div>
          <div className="web-links-2">
            <p>Careers</p>
            <p>Community</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="search-column">
          <div className="search-box">
            <input placeholder="Updates in your inbox…" />
            <button className="rounded-orange-button">Go</button>
          </div>
          <div className="copyright">Copyright 2021. All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
