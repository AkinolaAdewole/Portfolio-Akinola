import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import NavBar from './ReUsables/NavBar';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

   // Function to handle smooth scroll to a section
   const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    // console.log('Section element:', sectionElement);
  
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  

  return (
    <div className="App">
  
      <NavBar scrollToSection={scrollToSection} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>    

  
    </div>
  );
}

export default App;
