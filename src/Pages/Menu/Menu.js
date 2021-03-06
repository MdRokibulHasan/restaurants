import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import FoodImg from "../../Images/gallery1.png.webp";
import FoodImg1 from "../../Images/gallery2.png.webp";
import FoodImg2 from "../../Images/gallery3.png.webp";
import FoodImg3 from "../../Images/gallery4.png.webp";

const Menu = () => {
  return (
    <div className="menu-top">
      <div className="container">
        <div className="row no-gutter justify-content-center">
          <div className="cl-xl-7 col-lg-8 col-md-10">
            <div className="section-title text-center">
              <span>Our Offerd Menu</span>
              <h2>Some Trendy And Popular Courses Offerd</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="properties-button">
            <div className=" container">
              <div className="tab-pane" id="dinner">
                <div className="row">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="gallery-box">
                      <div className="single-gallery">
                        <img src={FoodImg} alt="Image" className="img-fluid" style={{ height: "509px" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="gallery-box">
                      <div className="single-gallery">
                        <img src={FoodImg1} alt="Image" className=" img-fluid" style={{ height: "509px", width: "100%" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg2} alt="Image" className="img-fluid" style={{ height: "254px" }}></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg3} alt="Image" className="img-fluid" style={{ height: "255px" }}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
