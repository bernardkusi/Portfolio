import React,{  useState} from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Nav from './Nav.js';
import Projects from './Projects.js';
import Services from './Services.js';
import Skills from './Skills.js';
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
