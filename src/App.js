import React from 'react';
import Home from '../src/components/Home';
import Projects from '../src/components/Projects';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
     
    </div>
  );
}

export default App;
