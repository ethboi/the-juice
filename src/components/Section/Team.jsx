import React from "react";
import "../Styling/Game.css";
import { TEAM } from "../../data.js";
import CoreConcept from "./ContentCard.jsx";

const Team = () => {
  return (
    <section id="contact" class="juice-section">
      <h2>THE JUICE!!! </h2>
      <ul className="core-concepts-list">
        {TEAM.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default Team;
