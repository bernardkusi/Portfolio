import React,{  useState} from 'react';
import About from './sections/About.js';
import Contact from './sections/Contact.js';
import Home from './sections/Home.js';
import Projects from './sections/Projects.js';
import Services from './sections/Services.js';
import Skills from './sections/Skills.js';

import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Slider from './Slider.js';


function App() {

  const [open,setopen]=useState(true);
  const[dark,setdark]=useState(true);
  const opennav=()=>{
      setopen(prev=>!prev);
  }

  const toogleTheme=()=>{
    setdark(prev=>!prev);
  }

  return (
    <div className={[dark?"dark App":"App"]}>
    <Nav open={opennav} dark={dark} toggle={toogleTheme}/>
    <Slider isopen={open} dark={dark}/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Projects dark={dark}/>
    <Contact/>
    <Footer  dark={dark}/>
    
    </div>
    
  );
}

export default App;
