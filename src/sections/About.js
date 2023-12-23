import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="about">
      <p className="heading"> Know About Me</p>
      <div className="about">
        <p className="abouttext" data-aos-duration="600" data-aos="fade-right">
          I am a versatile creative professional, equally passionate about crafting intuitive user interfaces and developing robust software solutions. With a keen eye for design aesthetics and a strong foundation in software engineering, I merge the worlds of form and function to deliver user-centered experiences. My work is driven by a commitment to seamless user interactions and elegant code, ensuring that every project I undertake is both visually engaging and technically sound. Through a blend of design thinking and coding expertise, I strive to create digital solutions that not only meet user needs but also exceed expectations. Welcome to my portfolio, where I showcase my journey in the dynamic realm of UI design and software engineering.
        </p>
        <div className="aboutimage" data-aos-duration="600" data-aos="fade-left">
          <img src={require("../images/about.jpg")} alt="aboutimage" />
        </div>
      </div>
    </div>
  );
};

export default About;
