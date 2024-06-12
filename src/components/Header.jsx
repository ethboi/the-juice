import React, { useEffect, useState } from "react";
import logo from "../assets/juice.png";
import "./Styling/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav>
        <ul>
          <li>
            <a href="#juice">Juice!</a>
          </li>
          <li>
            <a href="#more-juice">More Juice!!</a>
          </li>
          <li>
            <a href="#the-juice">The Juice!!!</a>
          </li>
          <li>
            <a href="/" className="btn">
              Buy JUICE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
