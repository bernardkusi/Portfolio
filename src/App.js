import React,{  useState} from 'react';
import About from './About.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Nav from './Nav.js';
import Projects from './Projects.js';
import Services from './Services.js';
import Skills from './Skills.js';
import Slider from './Slider.js';


function App() {

  const [open,setopen]=useState(true);

  const opennav=()=>{
      setopen(prev=>!prev);
  }

  return (
    <div className="App">
    <Nav open={opennav}/>
    <Slider isopen={open}/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Footer/>
    
    </div>
    
  );
}

export default App;
