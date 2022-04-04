import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import FoodImg from "../../Images/gallery1.png.webp";
const Menu = () => {
  return (
    <div className="menu-top">
      <div className="container">
        <div className="row justify-content-center">
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
              <div className="nav">
                <Link to={""} className="nav-item active">
                  Special
                </Link>
                <Link to={""} className="nav-item">
                  Breakefirst
                </Link>
                <Link to={""} className="nav-item">
                  Lunch
                </Link>
                <Link to={""} className="nav-item">
                  Dinner
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="gallery-box">
              <div className="single-gallery">{/* <img src={FoodImg} alt="Image" className="img-fluid"></img> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
