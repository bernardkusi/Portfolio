import React from "react";
import Project from "./Project";


const Projects = ({dark})=>{
    return(
        <div id="projects">
            <p className="heading">View My Projects</p>
            <div className="projects_grid">

                <Project dark={dark}>
                <img src={require(`./primefurniture.png`)} alt="portfolio_image" />
                </Project>
                
                <Project dark={dark}>
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
                </Project>


            </div>
        </div>
    )
}

export default Projects;