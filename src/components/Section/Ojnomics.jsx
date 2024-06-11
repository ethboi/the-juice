import { OJNOMICS } from "../../data.js";

const Ojnomics = () => {
  return (
    <>
      <section id="juice" className="juice-section">
        <h2>Juice!</h2>
        <h2 className="main-h2-h2">1,000,000,000 Supply</h2>
        <ul className="core-concepts-list">
          {OJNOMICS.map((conceptItem, index) => (
            <li
              className={`box ${index === 1 ? "middle" : ""}`}
              key={conceptItem.title}
            >
              <img
                src={conceptItem.image}
                alt={conceptItem.title}
                className="box-image"
              />
              <h3>{conceptItem.title}</h3>
            </li>
          ))}
        </ul>
        <p className="ca-address">CA: ComingSoon</p>
      </section>
      <section id="meme-olympics" class="bun-section">
        <h2>OUR STORY</h2>
        <h2 className="h2undertitle">
          What the orange is going on, is that a tangerine!?
        </h2>
        <h3>
          $OJ is our entry into the Infinex ecosystem. And will e the first
          community meme-coin{" "}
        </h3>
        <h3>
          It's not a Dex, it's definitely not a Cex, but it's the one site that
          brings all together with a unified UI layer!
        </h3>
        <h3>
          {" "}
          Find out more about <a href="https://infinex.io">INFINEX.</a>
        </h3>
      </section>
    </>
  );
};

export default Ojnomics;
