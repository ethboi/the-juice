import React from 'react';
//import Twitter from './Twitter.jsx';
import './Styling/About.css';
import background from "../assets/CP1.jpeg"
import { Timeline } from 'react-twitter-widgets'

const About = () => {
  return (
    <section id="about" className="about">
      <img className="about-img" src={background} alt="background not found"/>
      <div className="content">
        <h2>About ZingCoin</h2>
        <p>ZingCoin is a revolutionary cryptocurrency designed to bring happiness and wealth to your digital wallet.</p>
        <h1>Twitter feed</h1>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'EthBoi_'
          }}
          options={{
            height: '400',
            width: '500'
          }}
        />
      </div>
    </section>
  );
};

export default About;
