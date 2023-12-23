import { useState } from "react";



const Nav=({open,dark,toggle})=>{
    const[active,setactive]=useState(false)
    const checknav=()=>{
        if(window.scrollY>160){
            setactive(true)
        }else{
            setactive(false)
        }
    }

    window.onscroll=checknav;
    
    return(
        <nav className={[active?"active ":"",dark?" dark":""]}>
            <a href="#" className="logo"> <span>B</span > <span className='purple'>K</span> <span>D</span> </a>

            <ul>
                <li><a href="https://digital-cv-sigma.vercel.app/"> View&nbsp;CV</a></li>
                <li><a href="#"> Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills"> My Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

            <div className={dark?"toggler dark":"toggler"} onClick={toggle}>
                <div></div>
            </div>

            
            <div className="bars" onClick={open}>
                <div className="bar"></div>
            </div>

            
        </nav>
    )
    
}

export default Nav;