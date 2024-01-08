import React from 'react';
import './Styling/About.css';
import background from "../assets/CP1.jpeg"

const About = () => {
  return (
    <section id="about" className="about">
      <img className="about-img" src={background} alt="background not found"/>
      <div className="content">
        <h2>About ZingCoin</h2>
        <p>ZingCoin is a revolutionary cryptocurrency designed to bring happiness and wealth to your digital wallet.</p>
        <h1>See Who Is Online</h1>
        <iframe 
          className="DiscordWidget" 
          title="Discord" 
          src="https://discord.com/widget?id=1193991824763793480&theme=dark" 
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
        </iframe>
      </div>
    </section>
  );
};

export default About;
