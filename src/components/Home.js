import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGitSquare,
    faHtml5,
    faJsSquare,
    faLinux,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

/* 
update hp/mp based on time 120/120 hp | 24/24 mp in am
and level/ xp bar by month? 5000/12000
(?) with hover that says how was this calculated and explain.
create custom tooltip later  */

const Home = () => {
    return (
        <div className="container-border">
            <main className="container">
           
                <h1 className="home-head-text">Kristin </h1>
                <h4> lvl 32 | HP: 90/120 | MP: 18/24</h4>
                <div className="home-content">
                <div className="home-img"></div>
                
                    <ul className="overview">
                       <p className="info-text">character overview</p> 
                        
                        <li> class: software developer</li>
                        <li> specialty: front end </li>
                        <li> pronouns she/ her </li>
                        <li>  currently seeking new guild. </li>
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
                  
                            Conjuring human friendly web apps, 
                            simple and clean layouts that are easy to navigate,
                            improved web interactivity, 
                            readable code.
                            <br /> <br /> blurb: what i do, character quote/ summary/ what charc is good at 
                        ? 
                </div>
            </main>
        </div>
    );
};

export default Home;
