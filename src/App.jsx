import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoreConcepts from './components/Section/CoreConcepts';
import Examples from './components/Section/Examples';



function App() {
  return (
    <>
      <Header />
      
      <Home/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
