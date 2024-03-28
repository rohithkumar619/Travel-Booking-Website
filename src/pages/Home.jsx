import React from "react";
import Header from "../components/Header/Header";
import hero1 from "../assets/images/hero-img01.jpg";
import hero2 from "../assets/images/hero-img02.jpg";
import heroV from "../assets/images/hero-video.mp4";
import world from "../assets/images/world.png";
import "../pages/styles/Home.css";
import Tour from "../pages/Tours";
import SearchResult from "./SearchResult";
import Experience from "./Experience";
import Gallery from "./Gallery";
import FansLove from "./FansLove";
import TravelContact from "../pages/TravelContact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header showNavLinks={true} bars={true} />
      <div className="home1">
        <div className="left-h">
          <div>
            <span>Know Before You Go</span>
            <img src={world} alt="" />
          </div>
          <h2>
            Traveling open the door to creating <span>memories</span>
          </h2>
          <span className="span3">
            Explore new horizons with our travel app, your personalized gateway
            to unforgettable adventures. Discover tailored itineraries, book
            accommodations, and immerse yourself in local cultures with ease.
            Whether it's a weekend getaway or a globetrotting journey, let our
            app be your compass to endless travel possibilities.
          </span>
        </div>
        <div className="right-h">
          <div>
            <img src={hero1} alt="" />
          </div>
          <video controls>
            <source className="video" src={heroV} type="video/mp4" />
          </video>
          <div>
            <img src={hero2} alt="" />
          </div>
        </div>
      </div>
      <SearchResult />
      <Tour />
      <Experience />
      <Gallery />
      <FansLove />
      <TravelContact />
      <Footer />
    </div>
  );
};

export default Home;
