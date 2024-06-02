import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "./CoreConcept.jsx";

const CoreConcepts = () => {
  return (
    <>
      <section id="bun-things" class="bun-section">
        <h2>Some things in $BUN we like... </h2>
        <ul className="core-concepts-list">
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
      <section id="buy-bun" class="bun-section">
        <h2>Buy $BUN Coin</h2>
        <h3>
          $BUN via{" "}
          <a href="https://app.uniswap.org/swap?outputCurrency=0x64e4A709e2eC72c2009E080EdF8D95Fe1aa0Dd54&chain=base">
            Uniswap
          </a>{" "}
          and or view all trades via{" "}
          <a href="https://dexscreener.com/base/0x64e4A709e2eC72c2009E080EdF8D95Fe1aa0Dd54">
            Dexscreener
          </a>
          .
        </h3>
      </section>
      <section id="meme-olympics" class="bun-section">
        <h2>Infinex Meme Olympics </h2>
        <h3>
          $BUN is our entry into the Infinex Meme Olympics Competition. A
          community meme coin trading competition on base, the Meme Olympics.{" "}
        </h3>
        <h3>
          Entrants from the community will launch tokens on Base and pair with
          $BUX a token minted by the Infinex team. The most successful traders
          and tokens will earn GP rewards.
        </h3>
        <h3>
          {" "}
          Find out more about <a href="https://infinex.io">INFINEX.</a>
        </h3>
      </section>
    </>
  );
};

export default CoreConcepts;
