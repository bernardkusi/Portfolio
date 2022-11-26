import React from "react";
import Project from "./Project";


const Projects = ({dark})=>{
    const projects=[
        {name:"Snackbar",link:"snackbar-gamma.vercel.app",image:"snackbar.png"},
        {name:"primeelectricals",link:"primeelectricals.vercel.app",image:"primeelectricals.png"},
        {name:"primehotel",link:"hoteldeprime.vercel.app",image:"primehotel.png"},
        {name:"PrimeFurniture",link:"primefurniture.netlify.app",image:"primefurniture.png"},
        // {name:"PrimeClean",link:"/",image:"primeclean.png"},
        // {name:"SweetMeals",link:"/",image:"sweetmeals.png"},
        // {name:"PrimeBoutique",link:"/",image:"primeboutique.png"},
        {name:"PrimeGuestHouse",link:"primeguesthouse.vercel.app",image:"primeguesthouse.png"},
        {name:"PrimeBeautyHub",link:"primebeautyhub.vercel.app",image:"primebeautyhub.png"},
        {name:"PrimeEstate",link:"primeestate.netlify.app",image:"primeestate.png"},
        {name:"TastyFood",link:"tastyfood.infinityfreeapp.com",image:"tastyfood.png"},
    ]
    return(
        <div id="projects">
            <p className="heading">View My Projects</p>
            <p className="skillhead">Web development</p>
            <div className="projects_grid">
                {projects.map((project,index)=>{return(
                    <Project dark={dark} key={index} project={project}>
                    <img src={require(`./${project.image}`)} alt={project.name} />
                    </Project>)
                })}

            </div>

            <p className="skillhead">Ui/Ux Design projects</p>
            <div className="figmagrid">
                <a href="http://www.figma.com/proto/Awsfej05FWmEwItPism2JY/Untitled?node-id=3%3A47&scaling=scale-down&page-id=0%3A1&starting-point-node-id=31%3A138" target="_blank" rel="noopener noreferrer">
                <div className="image">
                <img src={require(`./falaa.png`)} alt="falaa image" />
                </div>
                </a>
                
                <a href="https://www.figma.com/proto/8M5i92D9pPEbcM54VBynUk/Untitled?node-id=16%3A731&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A2" target="_blank" rel="noopener noreferrer">
                <div className="image">
                <img src={require(`./donkomi.png`)} alt="donkomi image" />
                </div>
                </a>

                <a href="https://www.figma.com/proto/8M5i92D9pPEbcM54VBynUk/Untitled?node-id=16%3A731&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A2" target="_blank" rel="noopener noreferrer">
                <div className="image">
                <img src={require(`./sweetmeals (2).png`)} alt="sweetmeals image" />
                </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;