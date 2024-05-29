// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";


const App = () => {
  return (
    <>
    <Router>
   <Navbar/>
   
   
   <Routes>
          <Route exact path="/" element={<Intro/>}></Route>
          <Route exact path="/Skills" element={<Skills/>}></Route>
          <Route exact path="/Education" element={<Education/>}></Route>
          <Route exact path="/Projects" element={<Projects/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
    </Routes>
    <Footer/>
    </Router>
         
   
   
   </>
  );
};

export default App;
