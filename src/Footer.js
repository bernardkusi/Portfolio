import React from 'react';

const Footer=({dark})=>{
    return(
        <footer className={dark?"dark":""}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
           
           <ul className="links">
               <a href="#"><i className="fab fa-facebook"></i></a>
               <a href="#"><i className="fab fa-instagram"></i></a>
               <a href="#"><i className="fab fa-linkedin"></i></a>
               <a href="#"><i className="fab fa-twitter"></i></a>
           </ul>
            <p className="copy">copyright&copy;Bernard&nbsp;Dwumfour2022</p>
        </footer>
    )

}

export default Footer;