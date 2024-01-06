import React from 'react';
import './Styling/About.css';
import background from "../assets/CP1.jpeg"

const About = () => {
  return (
    <section classname="about-bg" style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}  id="about" className="about">
      <div className="content">
        <h2>About ZingCoin</h2>
        <p>ZingCoin is a revolutionary cryptocurrency designed to bring happiness and wealth to your digital wallet.</p>
      </div>
    </section>
  );
};

export default About;
