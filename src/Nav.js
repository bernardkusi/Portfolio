


const Nav=(props)=>{
    
    return(
        <nav>
            <a href="#" className="logo"> <span>B</span > <span className='purple'>K</span> <span>D</span> </a>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills"> My Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact Me</a></li>
            </ul>

            <div className="bars" onClick={props.open}>
                <div className="bar"></div>
            </div>
        </nav>
    )
    
}

export default Nav;