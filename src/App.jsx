import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Game from "./components/Game";
import CoreConcepts from "./components/Section/CoreConcepts";

function App() {
  return (
    <>
      <Header />
      <Home />
      <main>
        <CoreConcepts />
        <Game />
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default App;
