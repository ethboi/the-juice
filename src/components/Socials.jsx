import React from 'react';
import './Styling/Socials.css';
import xlogo from '../assets/xlogoW.png';
import disclogo from '../assets/discordlogoW.png';

const Socials = () => {
  return (
    <div id="socials">
      <h3>Connect with us on Social Media</h3>
      <div className="social-links">
        <a href="https://discord.gg/xFrcDG39" target="_blank" rel="noopener noreferrer">
          <img src={disclogo} alt="Discord" />
        </a>
        <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
          <img src={xlogo} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
