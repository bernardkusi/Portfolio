import React from "react";

const Home=()=>{
    return(
        <div id="home">
            <div className="info">
            <h1>Bernard Kusi Dwumfour</h1>
            <h3>Hi ,Im  a FullStack Web Developer / Graphic Designer </h3>
            <p>Feel free to Look around and hit me up if you need any of my services.</p>
            <a href="#" className="button">Download My CV</a>
            <a href="#" className="button">Hire Me</a>
            </div>

            <div className="homeimage">
                <img src="./homeimage.png" alt="image" />
            </div>
            
        </div>

    )
}

export default Home;