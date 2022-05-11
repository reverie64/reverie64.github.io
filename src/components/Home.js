import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGitSquare,
    faHtml5,
    faJsSquare,
    faLinux,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components'
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";


const StyledH1 = styled.h1`
   text-shadow: 4px 4px 0 #f8f2f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #383838;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
`;


/* 
update hp/mp based on time 120/120 hp | 24/24 mp in am
and level/ xp bar by month? 5000/12000
(?) with hover that says how was this calculated and explain.
create custom tooltip later 
 <div class="tooltip">Hover over me
  </div>
 <span class="tooltiptext">Tooltip text</span>
currently seeking new guild. </li>
*/

const Home = () => {
    return (
        <div className="container-border">
            <main className="container">
              <StyledH1>Kristin </StyledH1>  
          
               
                <div className="home-content">
                <div className="home-img"></div>
                
                
                    <ul className="overview">  
                    <div>           HP  |||||||||||||||||||||||||  90/120 <br />
                MP  ||||||||||||||||||||||     18/24 </div> <br />
                       <p className="info-text">character overview</p> 
                        
                        <li> class: software developer</li>
                        <li> specialty: front end </li>
                        <li> pronouns she/ her </li>
                        <li>   </li>  
                        <ul className="spells">
                  Spells:
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
                  </li>
                  <li>  
                       <FontAwesomeIcon icon={faSpaghettiMonsterFlying} alt="Styled Components" />
                       </li>   
                       
                    </ul>
                    
                    </ul> 
                 
                    </div><h4> lvl 32 </h4>
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