import React from "react";
import Project from "./Project";


const Projects = ({dark})=>{
    const projects=[

        {name:"PrimeFurniture",link:"primefurniture.netlify.app",image:"primefurniture.png"},
        {name:"PrimeClean",link:"/",image:"primeclean.png"},
        {name:"SweetMeals",link:"/",image:"sweetmeals.png"},
        {name:"PrimeBoutique",link:"/",image:"primeboutique.png"},
        {name:"PrimeGuestHouse",link:"primeguesthouse.vercel.app",image:"primeguesthouse.png"},
        {name:"PrimeBeautyHub",link:"primebeautyhub.vercel.app",image:"primebeautyhub.png"},
        {name:"PrimeEstate",link:"primeestate.netlifyapp",image:"primeestate.png"},
        {name:"TastyFood",link:"tastyfood.infinityfreeapp.com",image:"tastyfood.png"},
    ]
    return(
        <div id="projects">
            <p className="heading">View My Projects</p>
            <div className="projects_grid">
                {projects.map((project,index)=>{return(
                    <Project dark={dark} key={index} project={project}>
                    <img src={require(`./${project.image}`)} alt={project.name} />
                    </Project>)
                })}

                
                
                {/* <Project dark={dark}>
                <img src={require(`./primeclean.png`)} alt="portfolio_image" />
                </Project>

                <Project dark={dark}>
                <img src={require(`./primeguesthouse.png`)} alt="portfolio_image" />
                </Project>

                <Project dark={dark}>
                <img src={require(`./primeestate.png`)} alt="portfolio_image" />
                </Project>

                <Project dark={dark}>
                <img src={require(`./tastyfood.png`)} alt="portfolio_image" />
                </Project> */}


            </div>
        </div>
    )
}

export default Projects;