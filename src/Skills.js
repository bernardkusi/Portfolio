import React from 'react';
import Skill from './Skill.js'

const Skills=()=>{
//Core skill list to map through 
    const skill_list=[
        {skillname:'HTML'},
        {skillname:'CSS'},
        {skillname:'Javascript'},
        {skillname:'Bootstrap'},
        {skillname:'TailwindCSS'},
        {skillname:'ReactJS'},
        {skillname:'SQL'},
        {skillname:'PostgreSQL'},
        {skillname:'PHP'},
        {skillname:'Laravel'}
    ];

// Other skills list to map through
    const skill_list2=[
        {skillname:'Python'},
        {skillname:'C Programming'},
        {skillname:'C++'},
        {skillname:'Django'},
        {skillname:'GIT/GitHub'},
        {skillname:'Photoshop'},
        {skillname:'OOP'},
        {skillname:'SASS'},
    ];

    return(
        <div  id="skills">
             <p className="heading">My Skills</p>
             <p className="skillhead">Core Skills</p>
             <div className='container'>
                 {/* mapping through the core skill lists to render  */}
                 {skill_list.map((element,index)=>{return <Skill name={element.skillname} key={index}/>})}
             </div>

            <p className="skillhead">Other Skills</p>
             <div className='container'>
                 {/* Mapping through other skill list to render */}
             {skill_list2.map((element,index)=>{return <Skill name={element.skillname} key={index}/>})}

             </div>
        </div>
    )
    
}

export default Skills;