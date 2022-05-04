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
        <div className="container-border">
            <main className="container">
                <h1 className="home-head-text">Name: Kristin </h1>
                <h2 className="subhead-text">character overview</h2>
                <div className="content">
                    <ul>
                        <li> class: software developer - mage</li>
                        <li> specialty front end </li>
                        <li>
                            spells
                            <ul>
                                <li>
                                    React
                                    <FontAwesomeIcon icon={faReact} alt="" />
                                </li>
                                <li>
                                    JavaScript
                                    <FontAwesomeIcon icon={faJsSquare} alt="" />
                                </li>
                                <li>
                                    HTML/ CSS
                                    <FontAwesomeIcon icon={faHtml5} alt="" />
                                    <FontAwesomeIcon icon={faCss3Alt} alt="" />
                                </li>
                                <li>
                                    Git
                                    <FontAwesomeIcon
                                        icon={faGitSquare}
                                        alt=""
                                    />
                                </li>
                                <li>
                                    Linux
                                    <FontAwesomeIcon icon={faLinux} alt="" />
                                </li>
                            </ul>
                        </li>
                       
                       blurb: what i do, etc. make it like character quote? or summary?
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Main;
