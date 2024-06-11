import React from "react";
import "./Styling/Game.css";
import { BUN_TEAM } from "../data.js";
import CoreConcept from "./Section/Ojnomic.jsx";

const About = () => {
  return (
    <section id="contact" class="juice-section">
      <h2>The $OJ Team</h2>
      <ul className="core-concepts-list">
        {BUN_TEAM.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default About;
