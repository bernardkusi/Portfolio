import  React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';


// Here is the skill component thet will be rendered in the skills component
const Skill=({name,icon})=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="skill" data-aos="zoom-in"  data-aos-duration="500"><span className='icon'>{icon}</span>{name}</div>
    )
}

export default Skill;