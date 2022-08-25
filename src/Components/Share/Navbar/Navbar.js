import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth.";
import "./Navbar.css";
import Logo from "../../../Images/download.webp";
const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarNav">
            <div className="logo">
              {" "}
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo Image" />
              </Link>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/home "} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/showmenu "} className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                {user?.email && (
                  <Link to={"/userorder"} className="nav-link">
                    My Order
                  </Link>
                )}
              </li>

              <li className="nav-item">
                {user?.email ? (
                  <button type="button" onClick={logOut} className="appointment-btn">
                    LogOut{" "}
                  </button>
                ) : (
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
            <div>
              <Link to={"/showmenu"}>
                <button type="button" className="appointment-btn text-center">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
