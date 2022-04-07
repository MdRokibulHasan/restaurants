import React from "react";
import { Link } from "react-router-dom";
import BlogsImg from "../../Images/xblog3.png.pagespeed.ic.70q_LEeEU9.webp";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs-area section-padding30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <span>Our New Blog News</span>
              <h2>Our Recent News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blogs mb-100">
              <div className="blogs-img">
                <img src={BlogsImg} alt="Image" />
              </div>
              <div className="blog-cap">
                <span className="color1">23 Dec, 2020</span>
                <h4 className="title">
                  <Link to={""}>Addiction When Food Plate Becomes</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blogs mb-100">
              <div className="blogs-img">
                <img src={BlogsImg} alt="Image" />
              </div>
              <div className="blog-cap">
                <span className="color1">23 Dec, 2020</span>
                <h4>
                  <Link to={""}>Addiction When Food Plate Becomes</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-blogs mb-100">
              <div className="blogs-img">
                <img src={BlogsImg} alt="Image" />
              </div>
              <div className="blog-cap">
                <span className="color1">23 Dec, 2020</span>
                <h4>
                  <Link to={""}>Addiction When Food Plate Becomes</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
