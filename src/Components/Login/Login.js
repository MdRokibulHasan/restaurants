import React from "react";
import "./Login.css";
import googleImg from "../../Images/google.png";
import Navbar from "../Share/Navbar/Navbar";
import useAuth from "../Hooks/useAuth.";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useNavigate();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      history(redirect_uri);
    });
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div className="breadcrumbs overlay">
        <div className="banner-color"></div>
      </div>
      <div>
        <div className="w-100 m-5">
          <div className="login-section m-auto">
            <h1 className="text-center">Login</h1>
            <div className="text-center">
              <button className="link-button" onClick={handleGoogleLogin}>
                {" "}
                <img src={googleImg} alt="Google Image" width="24" height="39" /> Google Sign IN
              </button>
            </div>

            <div className="input-section text-center">
              <h3>Or</h3>
              <div
                className="w-100 d-flex 
                    justify-content-center
                    flex-wrap"
              >
                <div class="input-group w-50 m-3">
                  {/* <span class="input-group-text">Email</span> */}
                  <input type="email" aria-label="First name" class="form-control " placeholder="Enter Email" />
                </div>
                <div class="input-group w-50 m-3">
                  {/* <span class="input-group-text">Password</span> */}
                  <input type="password" aria-label="First name" class="form-control" placeholder="Enter Password" />
                </div>
              </div>
              <div>
                <button className="log-button">Log In</button>
                <p className="link">
                  <a href="#">Forget Password</a>
                </p>
                <p>
                  <a href="/signup">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
