import React from "react";
import Project from "../components/Project";


const Projects = ({ dark }) => {
    const projects = [
        { name: "Snackbar", link: "snackbar-gamma.vercel.app", image: "snackbar.png" },
        { name: "primeelectricals", link: "primeelectricals.vercel.app", image: "primeelectricals.png" },
        { name: "primehotel", link: "hoteldeprime.vercel.app", image: "primehotel.png" },
        { name: "PrimeFurniture", link: "primefurniture.netlify.app", image: "primefurniture.png" },
        { name: "PrimeGuestHouse", link: "primeguesthouse.vercel.app", image: "primeguesthouse.png" },
        { name: "PrimeBeautyHub", link: "primebeautyhub.vercel.app", image: "primebeautyhub.png" },
        { name: "PrimeEstate", link: "primeestate.netlify.app", image: "primeestate.png" },
        { name: "TastyFood", link: "tastyfood.infinityfreeapp.com", image: "tastyfood.png" },
    ]
    return (
        <div id="projects">
            <p className="heading">View My Projects</p>
            <p className="skillhead">Web development</p>
            <div className="projects_grid">
                {projects.map((project, index) => {
                    return (
                        <Project dark={dark} key={index} project={project}>
                            <img src={require(`../${project.image}`)} alt={project.name} />
                        </Project>)
                })}

            </div>

            <p className="skillhead">Ui/Ux Design projects</p>
            <div className="figmagrid">
                <a href="https://www.figma.com/file/Te914L3OTQXb2E9JQtK1zV/Untitled?type=design&node-id=65%3A157&mode=design&t=DdfKnhW8It0BPdvz-1" target="_blank" rel="noopener noreferrer">
                    <div className="image">
                        <img src={require(`../images/furnichar.png`)} alt="falaa" />
                    </div>
                </a>
                <a href="https://www.figma.com/file/FxLv42zdfZ3pcXEy4rUykK/Untitled?type=design&mode=design&t=lBBXY0Twbor8ipBF-1" target="_blank" rel="noopener noreferrer">
                    <div className="image">
                        <img src={require(`../images/car_dealership_ui.png`)} alt="falaa" />
                    </div>
                </a>

                <a href="https://www.figma.com/file/wsOn762x0tnF0J5EEFub48/Untitled?type=design&mode=design&t=lBBXY0Twbor8ipBF-1" target="_blank" rel="noopener noreferrer">
                    <div className="image">
                        <img src={require(`../images/construction.png`)} alt="falaa" />
                    </div>
                </a>

                <a href="https://www.figma.com/file/Qu54Brec7MIyR2PGqKuitF/Untitled?type=design&node-id=0%3A1&mode=design&t=lBBXY0Twbor8ipBF-1" target="_blank" rel="noopener noreferrer">
                    <div className="image">
                        <img src={require(`../images/restaurant_website_ui.png`)} alt="falaa" />
                    </div>
                </a>

                <a href="https://www.figma.com/proto/8M5i92D9pPEbcM54VBynUk/Untitled?node-id=16%3A731&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A2" target="_blank" rel="noopener noreferrer">
                    <div className="image">
                        <img src={require(`../images/donkomi.png`)} alt="donkomi" />
                    </div>
                </a>

                <a href="https://www.figma.com/proto/8M5i92D9pPEbcM54VBynUk/Untitled?node-id=16%3A731&scaling=scale-down&page-id=0%3A1&starting-point-node-id=9%3A2" target="_blank" rel="noopener noreferrer">
                    <div className="image">
                        <img src={require(`../images/sweetmeals (2).png`)} alt="sweetmeals" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;