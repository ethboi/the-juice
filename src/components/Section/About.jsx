import { OJNOMICS } from "../../data.js";
import "../Styling/About.css";

const About = () => {
  return (
    <>
      <section id="juice" className="juice-section">
        <h2>Juice!</h2>
        <h2 className="main-h2-h2">420,690,000,000,000 Supply</h2>
        <ul>
          {OJNOMICS.map((conceptItem, index) => (
            <li className="box" key={conceptItem.title}>
              <img
                src={conceptItem.image}
                alt={conceptItem.title}
                className="box-image"
              />
              <h2 className="main-h2-h2">{conceptItem.title}</h2>
            </li>
          ))}
        </ul>
      </section>
      <section
        id="more-juice"
        className="juice-section juice-section-2 section-full"
      >
        <h2>MORE JUICE!!</h2>
        <h2 className="main-h2-h2">What the juice?, is that a tangerine!?</h2>
        <h3>
          Juice ($OJ) is the first Infinex ecosystem meme coin.
          <br /> Infinex is the the everything app that brings slick UX to a
          unified UI layer!
        </h3>
        <h3>
          Find out more about
          <a href="https://infinex.io" className="btn">
            INFINEX
          </a>
        </h3>
      </section>
    </>
  );
};

export default About;
