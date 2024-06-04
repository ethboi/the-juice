import React, { useEffect, useRef } from 'react';
import './Styling/ProgressBar.css';

const RoadmapCard = ({ title, description, imgSrc, className }) => {
  const cardRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = cardRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={cardRef} className={`roadmap-card ${className}`}>
      <div className="roadmap-card-details">
        <h3 className="roadmap-title">
          <strong>{title}</strong>
        </h3>
        <p className="paragraph roadmap2">{description}</p>
      </div>
      <div className="roadmap-img-box">
        <img src={imgSrc} alt="" className="roadmap-img" />
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const imageWrapperRef = useRef();
  const roadmapWrapperRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const imageWrapper = imageWrapperRef.current;
      const roadmapWrapper = roadmapWrapperRef.current;

      if (imageWrapper && roadmapWrapper) {
        const rect = roadmapWrapper.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
          imageWrapper.style.position = 'fixed';
          imageWrapper.style.top = '0';
        } else if (rect.top > 0) {
          imageWrapper.style.position = 'relative';
          imageWrapper.style.top = '0';
        } else {
          imageWrapper.style.position = 'absolute';
          imageWrapper.style.top = `${rect.height - window.innerHeight}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout-grid">
      <div className="image-wrapper" ref={imageWrapperRef}>
        <img
          src="https://assets-global.website-files.com/65e6274f1c662cd87f44ba36/65eb54f49fd7a379a99b8275_epepflip.webp"
          alt=""
          className="roadmap-image"
        />
      </div>
      <div className="roadmap-wrapper" ref={roadmapWrapperRef}>
        <div className="roadmap-cards">
          {[
            {
              title: 'No Promises',
              description:
                "EPEP isn't an investment, it's a meme coin & also an experiment to test the community & have FUN!",
              imgSrc: 'https://assets-global.website-files.com/65e6274f1c662cd87f44ba36/65e627501c662cd87f44bb20_roadmap-shape_01.png',
              className: '_1'
            },
            {
              title: 'WEN ROADMAP!?',
              description:
                "There's no roadmap here bozo, we just splashing and leaping around.",
              imgSrc: 'https://assets-global.website-files.com/65e6274f1c662cd87f44ba36/65e627501c662cd87f44bb22_roadmap-shape_02.png',
              className: '_2'
            },
            {
              title: 'Community First',
              description:
                'Share memes, leap together through our pond & celebrate each other’s gains.',
              imgSrc: 'https://assets-global.website-files.com/65e6274f1c662cd87f44ba36/65e627501c662cd87f44bb21_roadmap-shape_03.png',
              className: '_3'
            },
            {
              title: 'Get EPEP',
              description: 'Join us for memes and community spirit. Vibe and meme together as one!',
              imgSrc: 'https://assets-global.website-files.com/65e6274f1c662cd87f44ba36/65e627501c662cd87f44bb21_roadmap-shape_03.png',
              className: '_4'
            }
          ].map((card, index) => (
            <RoadmapCard key={index} {...card} />
          ))}
        </div>
        <div className="buttons">
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/HwmXcC95GQVFUVUNgR23KAozvKJLYTAf8UAYDQyG8fKU?t=1709926924927"
            target="_blank"
            rel="noopener noreferrer"
            className="button-4 _1"
          >
            Chart
          </a>
          <a
            href="https://raydium.io/swap/?inputCurrency=sol&amp;outputCurrency=RUpbmGF6p42AAeN1QvhFReZejQry1cLkE1PUYFVVpnL&amp;outputSymbol=RUpbmG&amp;fixed=in"
            target="_blank"
            rel="noopener noreferrer"
            className="button-4 _2"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
