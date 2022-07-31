import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';



const Project=({children,dark})=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className={[dark?"dark ":""," project"]} data-aos="zoom-in-up">
            <div className="image">
                <a  href='#' className="git"></a>
                {children}
                </div>
            <a href='#' className="view">Live Preview</a>
        </div>
    )
}

export default Project;