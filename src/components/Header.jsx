import React from 'react';
import logo from '../assets/dog.png';
import './Styling/Header.css';

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="ZingCoin Logo" className="logo-img" />
        </div>
        <h1>ZingCoin</h1>
        <h2>The Danzing Dog Coin</h2>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">$ZING</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
