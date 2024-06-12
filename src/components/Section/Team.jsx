import React from "react";
import "../Styling/Game.css";
import { TEAM } from "../../data.js";
import ContentCard from "./ContentCard.jsx";

const Team = () => {
  return (
    <section id="the-juice" class="juice-section">
      <h2>THE JUICE!!!</h2>
      <ul>
        {TEAM.map((conceptItem) => (
          <ContentCard key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
};

export default Team;
