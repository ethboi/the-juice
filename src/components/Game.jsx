import React from 'react';
import './Styling/Game.css';
import background from "../assets/CP2.jpeg"

const About = () => {
  return (
    <section id="game" className="game">
        <img className="game-img" src={background} alt="background not found" ></img>
      <div className="content">
        <h2>ZingCoin Game</h2>
        <h2>Coming Soon!</h2>
        <p>Climb the leaderboard.</p>
    </div>
    </section>
  );
};

export default About;
