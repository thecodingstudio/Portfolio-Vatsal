import React from 'react';

import './App.css';

import AboutUs from './Components/AboutUs/Aboutus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import Intro from './Components/Intro/Intro';

import Navbar from './Components/Navbar/Navbar';

import Portfolio from './Components/Portfolio/Portfolio';

import Services from './Components/Services/Services';

import Workflow from './Components/Workflow/Workflow';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutUs />
      <Services />
      <Workflow />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
