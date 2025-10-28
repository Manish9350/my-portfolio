// App.js with proper routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Cursor />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          } />
          {/* Add other routes if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;