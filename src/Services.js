import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';

const Services=()=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div id='services'>
           <p className="heading">Services I Offer</p>
           <div className="servicecontainer">
               <div className="service"  data-aos="flip-up" data-aos-duration="1000">
                   <img src={require(`./backend.png`)} alt="backend-image" />
                   <p className="servicetext">Front End Development</p>
                </div>
               <div className="service"  data-aos="flip-up" data-aos-duration="1000"><p className="servicetext">Back End Development</p></div>
               <div className="service"  data-aos="flip-up" data-aos-duration="1000"><p className="servicetext">Responsive Web Dev</p></div>
               <div className="service"  data-aos="flip-up" data-aos-duration="1000"><p className="servicetext">Graphic Designing</p></div>
               <div className="service"  data-aos="flip-up" data-aos-duration="1000"><p className="servicetext">Web Designing</p></div>
           </div>
        </div>
    )
    
}

export default Services;