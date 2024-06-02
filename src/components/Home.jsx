import React from "react";
import gif from "../assets/bun-coin-logo.png";
import "./Styling/Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <img src={gif} alt="Dancing Dog" className="dancing-dog" />
          <div></div>
          <h1>Welcome to the $BUN Coin Universe on BASE!</h1>
          <img src={gif} alt="Dancing Dog" className="dancing-dog" />
        </div>
        <p>
          Experience the joy and excitement of $BUN as we journey to the moon
          together and put things in buns along the way.
        </p>
        <p>#BunToTheMoon</p>
      </div>
    </>
  );
};

export default Home;
