import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGitSquare,
    faHtml5,
    faJsSquare,
    faLinux,
    faReact,
} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
    return (
        <div className="container-border">
            <main className="container">
           
                <h1 className="home-head-text">Kristin </h1>
                <h4> lvl 32 HP: 90/100 MP: 70/100</h4>
                <div className="home-content">
                <div className="pic"></div>
                
                    <ul className="overview">
                        character overview
                        <li> class: software developer - mage</li>
                        <li> specialty front end </li>
                        <ul className="spells">
                  Spells
                  <li>
                    
                      <FontAwesomeIcon icon={faReact} alt="React" title="React"/>
                  </li>
                  <li>
                      
                      <FontAwesomeIcon icon={faJsSquare} alt="JavaScript" />
                  </li>
                  <li>
                    
                      <FontAwesomeIcon icon={faHtml5} alt="HTML" /> </li> <li>
                      <FontAwesomeIcon icon={faCss3Alt} alt="CSS" />
                  </li>
                  <li>
                      
                      <FontAwesomeIcon icon={faGitSquare} alt="Git" />
                  </li>
                  <li>
                      
                      <FontAwesomeIcon icon={faLinux} alt="Linux" />
                  </li> </ul>
                    </ul> 
                 
                    </div>
                    <div className="blurb">
                   blurb: what i do, character quote/ summary/ what charc is good at 
                        ? <br /> <br />
                            Conjuring human friendly web apps, 
                            simple and clean layouts that are easy to navigate,
                            improved web interactivity, 
                            readable code.
                    pronouns she/ her
     currently seeking new guild.
                </div>
            </main>
        </div>
    );
};

export default Home;
