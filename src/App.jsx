import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Game from './components/Game';
import CoreConcepts from './components/Section/CoreConcepts';
import Examples from './components/Section/Examples';
import CookieBanner from './components/CookieBanner';



function App() {
  return (
    <>
    <CookieBanner />
      <Header />
      <Home/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <Game/>
      <About />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
