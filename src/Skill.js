import  React from 'react'
// Here is the skill component thet will be rendered in the skills component
const Skill=({name})=>{
    return(
        <div className="skill"><span className='icon'></span>{name}</div>
    )
}

export default Skill;