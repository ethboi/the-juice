import React, { useEffect, useState } from "react";
import logo from "../assets/bun-coin.png";
import "./Styling/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll events
  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    // Add event listener to handle scroll events
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className={`logo ${isScrolled ? "small" : ""}`}>
        <img src={logo} alt="$BUN Coint" className="logo-img" />
      </div>
      <h1>$BUN Coin</h1>
      <h2>...because, everything is better in $BUN.</h2>
      <nav>
        <ul>
          <li>
            <a href="#bun-things">$BUN things</a>
          </li>
          <li>
            <a href="#buy-bun">Buy $BUN</a>
          </li>
          <li>
            <a href="#meme-olympics">Meme Olympics</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
