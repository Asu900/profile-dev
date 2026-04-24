import {Link} from "react-router";
import Navbar from '../components/Navbar';
import '../components/Hero.css';

const AboutMe =()=>{
    return(
        <Navbar>
            <div className="all-container">
                <div className="basic-container">
                    <div className="item-container"
                    style={{columnGap:'30px', width:'75%'}}>                        
                        <h1 className="secondary-text" style={{fontSize:'70px',gridRow:'1'}}>About Me</h1>
                        <p style={{gridColumn:'',}}>
                            Estudiante del Tecnologico de Monterrey
                        </p>
                        <p style={{gridColumn:'2', justifySelf:'left'}}>
                            Programador 
                        </p>
                    </div>
                </div>
            </div>
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </Navbar>
    )
}

export default AboutMe