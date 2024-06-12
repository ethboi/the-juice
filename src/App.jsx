import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Section/Contact";
import Footer from "./components/Footer";
import Team from "./components/Section/Team";
import ScrollingSection from "./components/Section/ScrollingSection";
import About from "./components/Section/About";
import ProgressBar from "./components/Section/ProgressBar";

function App() {
  return (
    <>
      <Header />
      <Home />
      <ScrollingSection />
      <main>
        <About />
        <ProgressBar />
        <Team />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
