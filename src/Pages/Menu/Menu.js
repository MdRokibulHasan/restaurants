import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import FoodImg from "../../Images/gallery1.png.webp";
import FoodImg1 from "../../Images/gallery2.png.webp";
import FoodImg2 from "../../Images/gallery3.png.webp";

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
            <nav>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" aria-current="page" href="#special">
                    Special
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#lunch">
                    Lunch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#brakefirst">
                    Brakefirst
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#dinner">
                    Dinner
                  </a>
                </li>
              </ul>
            </nav>
            <div className="tab-content container">
              <div className="tab-pane active" id="special">
                <div className=" row ">
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
                        <img src={FoodImg1} alt="Image" className="img-fluid" style={{ height: "509px", width: "100%" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg2} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="lunch">
                <div className="row ">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                    <div className="gallery-box">
                      <div className="single-gallery">
                        <img src={FoodImg1} alt="Image" className="img-fluid" style={{ height: "509px" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="gallery-box">
                      <div className="single-gallery">
                        <img src={FoodImg} alt="Image" className="img-fluid" style={{ height: "509px" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 ">
                    <div className="row  ">
                      <div className="col-lg-12 col-md-6 col-sm-6 ">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg2} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="brakefirst">
                <div className="row ">
                  <div className="col-lg-5 col-md-6 col-sm-6 ">
                    <div className="gallery-box">
                      <div className="single-gallery">
                        <img src={FoodImg1} alt="Image" className="img-fluid" style={{ height: "509px" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 ">
                    <div className="gallery-box">
                      <div className="single-gallery">
                        <img src={FoodImg2} alt="Image" className="img-fluid" style={{ height: "509px" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 ">
                    <div className="row ">
                      <div className="col-lg-12 col-md-6 col-sm-6 ">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg1} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                        <img src={FoodImg} alt="Image" className="img-fluid" style={{ height: "509px" }}></img>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg} alt="Image" className="img-fluid"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="gallery-box">
                          <div className="single-gallery">
                            <img src={FoodImg} alt="Image" className="img-fluid"></img>
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
