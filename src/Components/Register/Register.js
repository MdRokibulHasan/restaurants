import React from "react";
import Navbar from "../Share/Navbar/Navbar";

const Register = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="breadcrumbs ">
        <div className="banner-color"></div>
      </div>
      <div>
        <div className="w-100 m-5">
          <div className="login-section m-auto">
            <h1 className="text-center">Register</h1>
            <div className="input-section text-center ">
              <div class="input-group w-50 m-3">
                <input type="text" aria-label="First name" class="form-control " placeholder="Your Name" />
              </div>
              <div class="input-group w-50 m-3">
                <input type="email" aria-label="First name" class="form-control " placeholder="Your Email" />
              </div>
              <div class="input-group w-50 m-3">
                <input type="password" aria-label="First name" class="form-control" placeholder="Your Password" />
              </div>
              <div>
                <button className="log-button">Sign Up</button>

                <p>
                  Already have Account <a href="/login"> Sign In </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
