import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav';
import Home from './components/Home';
import Projects from './components/projects';
import About from './components/About';
import Contact from './components/Contact';
import Designs from './components/Design';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects /> } />
          <Route path="/designs" element={<Designs /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
