import React from 'react'
import { Link } from 'react-router'
import '../components/Hero.css';
import Navbar from '../components/Navbar'

export default function Projects() {
  return (
        <Navbar>
            <div className="all-container">
                <div className="basic-container">
                    <div className="item-container"
                    style={{columnGap:'30px', width:'75%'}}>                        
                        <h1 className="secondary-text" style={{fontSize:'70px',gridRow:'1'}}> Projects</h1>
                        <p style={{gridColumn:'',}}>
                            Maceta inteligente
                        </p>
                        <p style={{gridColumn:'2', justifySelf:'left'}}>
                            Red de wifi en los Campos Tecnologico de Monterrey en Pueblas 
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
