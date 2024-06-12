import React, { useRef } from "react";
import "../Styling/ProgressBar.css";
import image from "../../assets/pepe-calvin-kain.png";

const RoadmapCard = ({ title, description, className }) => {
  const cardRef = useRef();

  return (
    <div ref={cardRef} className={`roadmap-card ${className}`}>
      <div className="roadmap-card-details">
        <h3 className="roadmap-title">
          <strong>{title}</strong>
        </h3>
        <h3 className="paragraph roadmap2">{description}</h3>
      </div>
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="juice-section layout-grid">
      <div className="image-wrapper">
        <img src={image} alt="Pepe Calvin Kain" className="roadmap-image" />
      </div>
      <div className="roadmap-wrapper">
        <div className="roadmap-cards">
          {[
            {
              title: "No Promises",
              description:
                "JUICE isn't an investment, it's a meme coin & a community experiment!",
              className: "_1",
            },
            {
              title: "WEN ROADMAP!?",
              description:
                "There's no roadmap here juicers, we are just drinking JUICE and eating tangerines.",
              className: "_2",
            },
            {
              title: "Community First",
              description:
                "Share memes, JUICE together and celebrate each other's gains.",
              className: "_3",
            },
          ].map((card, index) => (
            <RoadmapCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
