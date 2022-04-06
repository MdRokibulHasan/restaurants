import React from "react";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import Services from "../../Components/Services/Services";
import Navbar from "../../Components/Share/Navbar/Navbar";
import TopBanner from "../../Components/TopBanner/TopBanner";
import About from "../About/About";
import BookNow from "../BookNow/BookNow";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <TopBanner />
      <HomeAbout />
      <Menu />
      <About />
      <BookNow />
      <Services />
    </div>
  );
};

export default Home;
