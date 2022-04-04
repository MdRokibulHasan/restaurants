import React from "react";
import "./TopBanner.css";
const TopBanner = () => {
  return (
    <div className="single-slider slider-height d-flex align-items-center ">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-9 ">
            <div className="hero-caption">
              <span id="">Discover Your Teste</span>
              <h1>We belive good food offer great smile</h1>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute
                irure.
              </p>
            </div>
            <div className="hero-btn">
              <button className="btn">Resurvation</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
