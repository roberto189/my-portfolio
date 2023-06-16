import "./Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            MY PORTFOLIO
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        </nav>
    );
  }
  
  export default Navbar;