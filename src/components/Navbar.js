import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <p>logo</p>
            <ul className="nav-links">
                <Link to="/about">
                    <li>about</li>
                </Link>
                <Link to="/projects">
                    <li>projects</li>
                </Link>
                <Link to="/contact">
                    <li>contact</li>
                </Link>
            </ul>

            <div className="wrapper">
            theme toggle
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle--checkbox"
                    name="toggle"
                />
                <label htmlFor="toggle" className="toggle--label">
                    <span className="toggle--label-background"></span>
                </label>
                <div className="background"></div>
            </div>
        </nav>
    );
};

export default Navbar;
