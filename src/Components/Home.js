import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          "Savor the Art of flavor!"
          </h1>
          <p className="primary-text">
          Dive into a world where every bite tells a story, flavors dance on your palate,and each dish is a masterpiece crafted with love and passion.Our food isn't just something you eat,it's an experience that awakens your senses and transports you to a realm of pure culinary bliss.Come taste the magic,where every meal celebrates the flavor,freshness,and artistry
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
