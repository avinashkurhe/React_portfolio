import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Experience from './componants/Experience';
import Skills from './componants/Skills';
import Project from './componants/Project';
import Contact from './componants/Contact';
import Education from './componants/Education';
import Footer from './componants/Footer'



function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    <Footer />
    </>
  );
}

export default App;
