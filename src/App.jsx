import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Game from "./components/Game";
import CoreConcepts from "./components/Section/Ojnomics";
import ScrollingSection from "./components/ScrollingSection";
import Ojnomics from "./components/Section/Ojnomics";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ScrollingSection />
      <main>
        <Ojnomics />
        <Game />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
