import React from "react";
import ServicesImage from "../../Images/chef (1).png";
import ServicesImage1 from "../../Images/grill.png";
import "./Services.css";
const Services = () => {
  return (
    <div className="our-services section-padding30">
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-title text-center mb-70">
              <span>Services We Offer</span>
              <h2>Our Best Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span>
                  {" "}
                  <img src={ServicesImage} alt="Image" />{" "}
                </span>
              </div>
              <div className="services-cap">
                <h5>Best Chef</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span>
                  {" "}
                  <img src={ServicesImage1} alt="Image" />{" "}
                </span>
              </div>
              <div className="services-cap">
                <h5>Quality Food</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <span>
                  {" "}
                  <img src={ServicesImage} alt="Image" />{" "}
                </span>
              </div>
              <div className="services-cap">
                <h5>Perfet Cook</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
