import React from 'react'

const Slider = ({isopen}) => {
  return (
    <div className={isopen?'slider open':'slider'} >
        
        <ul>
        <li><a href="#">Home</a></li>
         <li><a href="#about">About Me</a></li>
        <li><a href="#skills"> My Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact Me</a></li>
        </ul>
    </div>
  )
}

export default Slider