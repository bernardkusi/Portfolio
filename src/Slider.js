import React from 'react'

const Slider = ({isopen,dark}) => {
  return (
    <div className={[isopen?'slider open ':' slider ',dark?" dark ":""]} >
        
        <ul>
        <li><a href="#"> Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills"> My Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
        </ul>
    </div>
  )
}

export default Slider