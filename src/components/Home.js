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
import  EmptyIcon  from "../images/EmptyIcon.svg"

const StyledH1 = styled.h1`
   text-shadow: 4px 4px 0 #f8f2f6;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #383838;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
   
`;

const StyledUl = styled.ul`

display: flex;
flex-direction: row;

`


const StyledIcon = styled.div`    
display: flex;
justify-content: center;
align-items: center;       
                           height: 10vh;
                           width: 10vh;
                       background-image: url(${EmptyIcon});
                      background-repeat: no-repeat;
.fa {
    height: 8vh;
                           width: 8vh;  
                           margin-left: auto;
                           margin-right: auto;
                           text-align: center;
                          /* filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='b' x='0' y='0'%3E%3CfeFlood x='4' y='4' height='2' width='2'/%3E%3CfeComposite width='100' height='100'/%3E%3CfeTile result='a'/%3E%3CfeComposite in='SourceGraphic' in2='a' operator='in'/%3E%3CfeMorphology operator='dilate' radius='5'/%3E%3C/filter%3E%3C/svg%3E#b");*/
                          
}

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
       
            <main className="container">
            
              <StyledH1>Kristin </StyledH1>  
        
                <div className="home-content">
                <div className="home-img"></div>
                
                
                    <ul className="overview">  
                    <div>           HP   90/120 <br />
                MP  ||||||||||||||||||||||     18/24 </div> <br />
                       <p className="info-text">character overview</p> 
                        
                        <li> class: software developer</li>
                        <li> specialty: front end </li>
                        <li> pronouns she/ her </li>
                    
                        <StyledUl>
                Special abilities/ abilities:
                  
                  <li> <StyledIcon>    <FontAwesomeIcon icon={faReact} alt="React" title="React" className="fa" /></StyledIcon>
               
                   
                  </li>
                  <li><StyledIcon>  
                      
                      <FontAwesomeIcon icon={faJsSquare} alt="JavaScript" className="fa" /></StyledIcon>  
                  </li>
                  <li>
                  <StyledIcon>  
                      <FontAwesomeIcon icon={faHtml5} alt="HTML" className="fa"  /> </StyledIcon>   </li> <li> <StyledIcon>  
                      <FontAwesomeIcon icon={faCss3Alt} alt="CSS" className="fa" /></StyledIcon>  
                  </li>
                  <li><StyledIcon>  
                      
                      <FontAwesomeIcon icon={faGitSquare} alt="Git" className="fa"  />
                      </StyledIcon>  
                  </li>
                  <li>
                  <StyledIcon>  
                      <FontAwesomeIcon icon={faLinux} alt="Linux" className="fa" />
                      </StyledIcon>  
                  </li>
                  <li> <StyledIcon>   
                       <FontAwesomeIcon icon={faSpaghettiMonsterFlying} alt="Styled Components" className="fa" />
                       </StyledIcon>  
                       </li>   
                       
                       </StyledUl>
                    
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
     
    );
};

export default Home;
