import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faGitSquare,
    faHtml5,
    faJsSquare,
    faLinux,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { faSpaghettiMonsterFlying } from "@fortawesome/free-solid-svg-icons";
import EmptyIcon from "../images/EmptyIcon.svg";

import Bars from "./Bars/Bars";

const StyledContent = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
`;


const StyledBadges = styled.ul`
    display: inline-block;
  // margin: 0 auto;
    border: 1px solid black;
    min-width: 18vw;
    min-height: 30vh;
   // flex-direction: column;
   // flex-wrap: wrap;
  //  justify-content: space-around;
  // align-items: center;
    border-width: 4px;
    border-color: #7462a5 #9787c1 #e0e0e0 #cccccc;
    // top right bottom left
   // outline: 1px solid #9787c1;
   // border: 4px outset #9787c1;
   width: -moz-fit-content;
  width: fit-content;

`;

const StyledIcon = styled.li`

    height: 10vh;
    width: 5vw;
    background-image: url(${EmptyIcon});
    background-repeat: no-repeat;
    padding-right: 10px;
    border: 4px outset #9787c1;
 

    .fa {
        height: 8vh;
        width: 8vw;
     
     display: flex;
 
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



.home-head-text {
    text-shadow: 4px 4px 0 #f5ebdd;


    Abilities:
}
*/

const Home = ( ) => {

 

    const findLevel = (birthYear ) => {
        birthYear = 1989;
        let date = new Date();
        //let birthday = new Date(birthYear);
let level = date.getFullYear() - birthYear
//birthday.getFullYear();
        return level
    };

    return (
        <main className="container">
   
        
            <StyledContent>
          
            <h1>Kristin </h1>
            <span className="info-text">character overview</span>
                <div className="img"></div>
                <h4> lvl. {findLevel()}</h4>
                <ul className="overview">
                    <Bars />

                    <li> class: software developer</li>
                    <li> specialty: front end </li>
                    <li> pronouns she/ her </li>
                </ul>
                
                <StyledBadges>
                    
                        
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faReact}
                                    alt="React"
                                    title="React"
                                    className="fa"
                                />
                            </StyledIcon>
                       
                       
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faJsSquare}
                                    alt="JavaScript"
                                    className="fa"
                                />
                            </StyledIcon>
                      
                      
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faHtml5}
                                    alt="HTML"
                                    className="fa"
                                />
                            </StyledIcon>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faCss3Alt}
                                    alt="CSS"
                                    className="fa"
                                />
                            </StyledIcon>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faGitSquare}
                                    alt="Git"
                                    className="fa"
                                />
                            </StyledIcon>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faLinux}
                                    alt="Linux"
                                    className="fa"
                                />
                            </StyledIcon>
                            <StyledIcon>
                                <FontAwesomeIcon
                                    icon={faSpaghettiMonsterFlying}
                                    alt="Styled Components"
                                    className="fa"
                                />
                            </StyledIcon>
                    </StyledBadges>
                </StyledContent>
           
            <div className="blurb">
                Conjuring human friendly web apps, simple and clean layouts that
                are easy to navigate, improved web interactivity, readable code.
                <br /> <br /> blurb: what i do, character quote/ summary/ what
                charc is good at ?
            </div>
        </main>
    );
};

export default Home;
