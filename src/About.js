import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';

const About = () => {

      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div id="about">
      <p className="heading"> Know About Me</p>
      <div className="about">
        <p className="abouttext"  data-aos-duration="600" data-aos="fade-right">
          I have knowledge in the basic front-end development technologies which
          are Hypertext Markup Language (HTML), Cascading Style Sheets(CSS) and
          Javacript(JS) as well as frameworks and libraries including Bootstrap5
          and Tailwind though I prefer working with Tailwind-CSS. I have also
          got a fair Knowledge of the ReactJS library as well as the VueJS
          framework . In addition to these, I have a knowledge of some backend
          technologies including PHP, python, Mysql and Postgress and frameworks
          such as Laravel and Django.
        </p>
        <div className="aboutimage"  data-aos-duration="600" data-aos="fade-left"></div>
      </div>
    </div>
  );
};

export default About;
