import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './components/Navbar';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import MentalHealth from './MentalHealth';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar >
          <Routes>

          <Route path = '/' element= {<Home/>}/> 
          <Route path = '/about' element= {<About/>}/> 
          <Route path = '/contact' element= {<Contact/>}/> 
          <Route path = '/skills' element= {<Skills/>}/> 
          <Route path = '/mentalhealth' element= {<MentalHealth/>}/> 
        </Routes>
        </Navbar>
      </div>
    </BrowserRouter>
  );
};

export default App;
