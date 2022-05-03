import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGitSquare,
    faHtml5,
    faJsSquare,
    faLinux,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
    return (
        <main className="container">
            <h1 className="home-head-text">Hi!</h1>
            <h1 className="home-head-text">I'm Kristin</h1>
            <h2 className="subhead-text">and I'm a frontend developer.</h2>
        
            <div className="content">
                I enjoy creating. human friendly web apps, simple and clean
                layouts that are easy to navigate, finding ways to improve web
                interactivity for all readable code? Passionate about accessible
                web for all.
                <ul>
                    Tech stacks:
                    <li>
                        React <FontAwesomeIcon icon={faReact} alt="" />
                    </li>
                    <li>
                        JavaScript
                        <FontAwesomeIcon icon={faJsSquare} alt="" />
                    </li>
                    <li>
                        HTML/ CSS <FontAwesomeIcon icon={faHtml5} alt="" />
                        <FontAwesomeIcon icon={faCss3Alt} alt="" />
                    </li>
                    <li>
                        Git <FontAwesomeIcon icon={faGitSquare} alt="" />
                    </li>
                    <li>
                        Linux <FontAwesomeIcon icon={faLinux} alt="" />
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Main;
