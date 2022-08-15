import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';



const Project=({children,dark,project})=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className={[dark?"dark ":""," project"]} data-aos="zoom-in-up">
            <div className="image">
                <a  href={`http//${project.link}`}  target="_blank" rel="noopener noreferrer" className="git"></a>
                {children}
                </div>
                <a  href={`http//${project.link}`}  target="_blank" className="view">Live Prview</a>
        </div>
    )
}

export default Project;