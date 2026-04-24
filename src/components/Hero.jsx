import './Hero.css';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <Navbar>
      <div className='all-container' >
        <div className='basic-container'>
        <div className='item-container' >
            <p className="main-text" style={{gridRow:'1',height:'120px'}}>
              Architecting <span style={{fontStyle:'italic',fontSize:'75%'}}className="secondary-text">Digital Artifacts</span>
            </p>
            <p style={{alignItems:'start', display:'grid',gridRow:'2', height:'40px',fontWeight:'bolder',fontStyle:'italic'}}>
              <span className='secondary-text'> Alex Moctezuma Manrique -- -- Tecnologico de Monterrey Student</span>
            </p>
            <p className='b-text'>
              Full-stack developer specializing in building high-performance, visually
              stunning web experiences that live at the intersection of design and
              data.
            </p>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Hero;