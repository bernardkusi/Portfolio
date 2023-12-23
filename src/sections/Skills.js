import React from 'react';
import Skill from '../components/Skill.js';

const Skills=()=>{
//Core skill list to map through 
    const skill_list=[
        {skillname:'HTML',icon:<i class="fa-brands fa-html5"></i>},
        {skillname:'SASS(CSS)',icon:<i class="fa-brands fa-sass"></i>},
        {skillname:'Javascript',icon:<i class="fa-brands fa-js"></i>},
        {skillname:'Typescript'},
        {skillname:'PHP',icon:<i class="fa-brands fa-php"></i>},
        {skillname:'Nodejs',icon:<i class="fa-brands fa-node-js"></i>},
        {skillname:'ReactJS',icon:<i class="fa-brands fa-react"></i>},
        {skillname:'SQL'},
        {skillname:'PostgreSQL'},
        {skillname:'Expressjs'},
        {skillname:'Laravel',icon:<i class="fa-brands fa-laravel"></i>},
        {skillname:'UI/UX Design(Figma)',icon:<i class="fa-brands fa-figma"></i>}
    ];

// Other skills list to map through
    const skill_list2=[
        {skillname:'Python',icon:<i class="fa-brands fa-python"></i>},
        {skillname:'C Programming'},
        {skillname:'C++'},
        {skillname:'Django'},
        {skillname:'GIT/GitHub',icon:<i class="fa-brands fa-git"></i>},
        {skillname:'Photoshop'},
        {skillname:'OOP'},
        {skillname:'Nextjs'},
        {skillname:'ReactNative'},
        {skillname:'Progressive Web Apps'},
    ];

    return(
        <div  id="skills">
             <p className="heading">My Skills</p>
             <p className="skillhead">Core Skills</p>
             <div className='container'>
                 {/* mapping through the core skill lists to render  */}
                 {skill_list.map((element,index)=>{return <Skill name={element.skillname} icon={element.icon} key={index}/>})}
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