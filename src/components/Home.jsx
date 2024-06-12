import React from "react";
import muscle from "../assets/muscle.png";
import "./Styling/Home.css";

const Home = () => {
  return (
    <>
      <div className="section-hero">
        <div className="content">
          <div className="w-layout-grid _2-column-grid">
            <div className="block-hero">
              <h1 className="heading h1">
                <span className="text-span-3">GOT JUICE?</span>
                <br />
                THE INFINEX COMMUNITY MEME COIN ON BASE
              </h1>
              <a href="#juice" className="link-block w-inline-block">
                <h1 className="heading-2 main btn wiggle">GET JUICE!</h1>
              </a>
            </div>
            <div className="block-hero">
              <img src={muscle} alt="$JUICE" className="logo-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
