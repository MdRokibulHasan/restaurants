import React from "react";
import "./Footer.css";
import FooterLogo from "../../Images/download.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-area footer-bg">
      <div className="container">
        <div className="footer-top footer-padding">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="footer-logo">
                  <a href="/home">
                    <img src={FooterLogo} alt="Footer Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-title">
                  <h4>Navigation</h4>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                      <Link to="/">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-5 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-title">
                  <h4>UseFul Links</h4>
                  <ul>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Register</Link>
                    </li>
                    <li>
                      <Link to="/menu">Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Terms & Condition</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-text">
          <p className="text-center align-items-center">Copyright ©2022 All rights FoodAPP!</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
