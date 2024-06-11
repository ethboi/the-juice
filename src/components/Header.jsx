import React, { useEffect, useState } from "react";
import logo from "../assets/juice.png";
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
      <div classname="flex">
        <div className={`logo ${isScrolled ? "small" : ""}`}>
          <img src={logo} alt="$JUICE" className="logo-img" />
        </div>
        <h1>
          Got <span className="btn">Juice?</span>
        </h1>
      </div>
      {/* <h2>Jucing to $1B Market Cap With OJ</h2> */}
      <nav>
        <ul>
          <li>
            <a href="#juice">Juice!</a>
          </li>
          <li>
            <a href="#more-juice">More Juice!!</a>
          </li>
          <li>
            <a href="the-juice">The Juice!!!</a>
          </li>
          <li>
            <a href="#juice" className="btn">
              Buy JUICE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
