
import { Link } from "react-router-dom";

const Navbar = () => {

    
    return (
        <nav>
      
            <ul className="nav-list">
            <Link to="/"><li className="nav-logo">logo</li></Link>
                <Link to="/about">
                    <li className="nav-link">about</li>
                </Link>
                <Link to="/exp"><li className="nav-link">exp</li></Link>
                <Link to="/projects">
                    <li className="nav-link">projects</li>
                </Link>
                <Link to="/contact">
                    <li className="nav-link">contact</li>
                </Link>
            </ul>

        </nav>
    );
};

export default Navbar;
