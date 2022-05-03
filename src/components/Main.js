import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitSquare, faHtml5, faJsSquare, faLinux, faReact, } from "@fortawesome/free-brands-svg-icons";



const Main = () => {


    return (
        <main className="container">
            <h1>Hi!</h1>
            <h1>I'm Kristin</h1> 
            <h2>and I'm a frontend developer.</h2>
            <br />
            <p> I enjoy creating.
               human friendly web apps, simple and clean layouts that are easy to navigate, finding ways to improve web interactivity for all 
readable code?   Passionate about accessible web for all. </p>
            <ul>Tech stacks: 
            <li> React <FontAwesomeIcon
                    icon={faReact}
                    alt="react"
                />  </li>  
            <li>JavaScript
            <FontAwesomeIcon icon={faJsSquare} alt=""/>
            </li>
            <li> HTML/ CSS <FontAwesomeIcon icon={faHtml5} alt="" />
            <FontAwesomeIcon icon={faCss3} alt="" />
            </li>
            <li>Git <FontAwesomeIcon icon={faGitSquare} alt="" />
            </li>
            <li>Linux <FontAwesomeIcon icon={faLinux} alt="" />
            </li>
          
         </ul>
        </main>
    );
};

export default Main;
