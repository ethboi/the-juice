import { OJNOMICS } from "../../data.js";
import Ojnomic from "./Ojnomic.jsx";

const Ojnomics = () => {
  return (
    <>
      <section id="bun-things" class="bun-section">
        <h2>OJNOMICS </h2>
        <h2 className="main-h2-h2">1,000,000,000 Supply</h2>
        <ul className="core-concepts-list">
          {OJNOMICS.map((conceptItem) => (
            <Ojnomic key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
        <p className="ca-address">CA: ComingSoon</p>
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

export default Ojnomics;
