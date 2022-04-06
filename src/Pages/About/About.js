import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../../Images/xabout2.png.pagespeed.ic.3xBj9J1mjv.webp";
import "./About.css";
const About = () => {
  return (
    <div className="container about">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about-caption">
            <div className="section-title">
              <span>About Our Restaurant</span>
              <h2>We Provide Good Food For Your Family!</h2>
              <p className="pera-top">
                Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat
                is aute irure m, quis nostrud exer .
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                form, by injected our, or randomised words which don't look even slightly believab If you are going to use a
                passage.
              </p>
              <Link to="">
                {" "}
                <button type="button" className="appointment-btn">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
