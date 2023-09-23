import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';


const Home=()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    return(
        <div id="home">
            <div className="info" data-aos="fade-down" data-aos-duration="1000">
            <div className="div1"></div>
            <div className="div2"></div>
            <h1>Bernard Kusi Dwumfour</h1>
            <h3>Hi ,Im  a FullStack Web Developer, (UI/UX) Designer and Graphic Designer </h3>
            <p>Feel free to Look around and hit me up if you need any of my services.</p>
            <a href="./Resume.pdf" className="button">Download My CV</a>
            <a href="tel:+233592724408" className="button">Hire Me</a>
            </div>

            <div className="homeimage" data-aos="fade-up" data-aos-duration="1000">
                <img src={require(`./homeimage.png`)} alt="image" />
            </div>
            
        </div>

    )
}

export default Home;