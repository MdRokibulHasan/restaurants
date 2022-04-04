import React from "react";
import "./HomeAbout.css";
import Image from "../../Images/chef (1).png";
import Image1 from "../../Images/chef.png";
import Image2 from "../../Images/grill.png";
import Image3 from "../../Images/xabout.png.pagespeed.ic.uca57n-jcw.webp";

const HomeAbout = () => {
  return (
    <div className="about-low-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-caption">
              <div className="section-title">
                <span>Discover Your Test</span>
                <h2>We Provider Good Food For Your Family!</h2>
              </div>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute
                irure.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div className="single-caption">
                  <div className="caption-icon">
                    <span>
                      {" "}
                      <img src={Image} alt="Image" className="caption-icon-ing" />{" "}
                    </span>
                  </div>
                  <div className="caption">
                    <p>Ut enim ad minim veniam,quis nostrud exer.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div className="single-caption">
                  <div className="caption-icon">
                    <span>
                      {" "}
                      <img src={Image2} alt="Image" className="caption-icon-ing" />{" "}
                    </span>
                  </div>
                  <div className="caption">
                    <p>Ut enim ad minim veniam,quis nostrud exer.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div className="single-caption">
                  <div className="caption-icon">
                    <span>
                      {" "}
                      <img src={Image1} alt="Image" className="caption-icon-ing" />{" "}
                    </span>
                  </div>
                  <div className="caption">
                    <p>Ut enim ad minim veniam,quis nostrud exer.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                <div className="single-caption">
                  <div className="caption-icon">
                    <span>
                      {" "}
                      <img src={Image} alt="Image" className="caption-icon-ing" />{" "}
                    </span>
                  </div>
                  <div className="caption">
                    <p>Ut enim ad minim veniam,quis nostrud exer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="about-img">
              <img src={Image3} alt="Image"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
