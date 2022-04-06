import React from "react";
import "./BookNow.css";
const BookNow = () => {
  return (
    <div className="booking-area section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title text-center">
              <h2>Book A Table</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <form action="#">
              <div className="booking-wrap d-flex justify-content-between align-items-center">
                <div className="col-lg-12 col-md-6 col-12 single-select-box">
                  <div className="select-itms">
                    <div className="select-icon">
                      <i class="ti-user"></i>
                    </div>
                    <select className="form-select" name="select" id="select1" aria-label="Default select example">
                      <option selected>Person</option>
                      <option value="1">Person 2</option>
                      <option value="2">Person 3</option>
                      <option value="3">Person 4</option>
                    </select>
                    {/* <div className="nice-select" tabIndex={"0"}>
                      <span className="current">Person</span>
                      <ul className="list">
                        <li data-value className="option selected">
                          Person
                        </li>
                        <li data-value className="option">
                          Person 2
                        </li>
                        <li data-value className="option">
                          Person 3
                        </li>
                        <li data-value className="option ">
                          Person 4
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-6  single-select-box">
                  <div className="boking-datepicker">
                    <div role="wrapper" className="gj-datepicker gj-datepicker-md gj-unselectable -3">
                      <input
                        className="book-input"
                        id="datepicker1"
                        placeholder="Date"
                        datatype="datepicker"
                        role="input"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6  single-select-box">
                  <div className="boking-datepicker">
                    <div role="wrapper" className="gj-datepicker gj-datepicker-md gj-unselectable">
                      <input
                        className="book-input"
                        id="datepicker1"
                        placeholder="Time"
                        datatype="datepicker"
                        role="input"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6  single-select-box">
                  <button className="btn selsect-btn"> Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
