import React from "react";
import "../Styling/Socials.css";
import xlogo from "../../assets/xlogoW.png";
import disclogo from "../../assets/discordlogoW.png";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social-links">
        <h3>Get in touch with us...</h3>
        <a href="https://discord.gg/infinex">
          <img src={disclogo} alt="Discord" />
        </a>
        <a href="https://twitter.com/ethboi_">
          <img src={xlogo} alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
