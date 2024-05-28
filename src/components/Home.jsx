import React from 'react';
import gif from '../assets/zing-dog-transparent.gif';
import './Styling/Home.css';
import backgroundVideo from '../assets/AdobeBG.mov';


const Home = () => {
  return (
    <>
      <video src={backgroundVideo} autoPlay loop muted id='video'/>
      <div className='home'>
        <div className='home-content'>
          <img src={gif} alt="Dancing Dog" className="dancing-dog" />
          <h1>JUICING TO $1B MARKET CAP WITH OJ</h1>
          <img src={gif} alt="Dancing Dog" className="dancing-dog" />
        </div>
        <p>Welcome to the world of Orange Pepes, the first native Infinex meme coin.</p>
        <p>#Defiorange</p>
    </div>
  </>
  );
};

export default Home;
