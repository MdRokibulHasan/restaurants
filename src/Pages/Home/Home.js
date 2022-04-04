import React from "react";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import Navbar from "../../Components/Share/Navbar/Navbar";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <TopBanner></TopBanner>
      <HomeAbout></HomeAbout>
      <Menu></Menu>
    </div>
  );
};

export default Home;
