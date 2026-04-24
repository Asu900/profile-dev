import './Navbar.css';
import { Link } from 'react-router';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="container-navbar">
        <div className="links">
          <p>
            <Link to='/Hero'> Home   --</Link>
          </p>
          <p>
            <Link to="/AboutMe">--   About Me   --</Link>
          </p>
          <p>
            <Link to='/ContactMe'> --   Contact Me   --</Link>
          </p>
          <p>
            <Link to='/Projects'> --   Projects</Link>
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;