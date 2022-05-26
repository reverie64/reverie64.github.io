//import { useState } from "react";

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
import EmptyIcon from "../assets/EmptyIcon.svg";

import Bars from "./Bars/Bars";
import { Main, Row, InfoText, SmInfoText } from "../theme";

/*  
   clear: left;
flex: 1 1 auto;
overflow: auto;
*/

const TopRow = styled(Row)``;

const MiddleRow = styled(Row)``;

const BottomRow = styled(Row)``;

const StyledHome = styled(Main)`
    justify-content: center;
`;

const StyledTop = styled.div`
    text-shadow: 4px 4px 0 #f8f2f6;
    font-size: 3.5rem;
    font-weight: bold;
`;

//! for image placeholder
const StyledPl = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border: 2px solid #84a59d;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
    .level {
        display: flex;
        font-size: 1.75rem;
        font-weight: bold;

        align-items: flex-end;
    }
`;

const StyledO = styled.ul``;
/*
const Level = styled.div`
    font-size: 1.75rem;
    font-weight: bold;
`;*/

const StyledBadges = styled.ul`
    display: flex;
    //border: 1px solid black;
    min-width: 20vw;
    min-height: 20vh;

    //flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    border: 7px inset #b1ccc5;
    background-color: #a9c7c1;
    outline: 7px solid #548787;
    //! make background color something else so it doesnt match tabs ?, corner cut out
    // display: grid;
    //border-collapse: separate;
`;

const StyledIcon = styled.li`
    background-image: url(${EmptyIcon});
    background-repeat: no-repeat;
    //border: 4px outset #9787c1;
    // border: 7px groove #9787c1;
    // border: 7px ridge #e0e0e0;
    //border: 5px outset #3471ad;
    min-height: 4rem;
    min-width: 4rem;
    //width: -moz-fit-content;
    // width: fit-content;
    display: flex;
    //border-collapse: separate;
    flex-grow: 1;

    .fa {
        min-height: 3rem;
        min-width: 3rem;
        //    height: 8vh;
        //  width: 8vw;
        //display: inline-block;
        //  text-align: center;
        width: -moz-fit-content;
        width: fit-content;
        color: #383838;
    }
`;

const StyledEnd = styled.div`
    display: flex;
    flex-grow: 1;
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

          <br /> <br /> blurb: what i do, character quote/ summary/ what
                charc is good at ?

.home-head-text {
    text-shadow: 4px 4px 0 #f5ebdd;


    Abilities:
}
*/

const Home = () => {
    return (
        <StyledHome>
            <TopRow>
                <StyledTop>Kristin </StyledTop>
                <Bars />
                <InfoText>character overview</InfoText>
            </TopRow>
            <MiddleRow>
                <StyledPl>
                    {" "}
                    <span className="level"> lvl. 32 </span>{" "}
                </StyledPl>
                <StyledO>
                    <li>
                        <span className="sm-info-text">class:</span> software
                        developer
                    </li>
                    <li>
                        {" "}
                        <span className="sm-info-text">specialty: </span>front
                        end{" "}
                    </li>
                    <li>
                        <span className="sm-info-text">pronouns:</span> she/ her{" "}
                    </li>
                </StyledO>
            </MiddleRow>
            <BottomRow>
                <SmInfoText>Abilities:</SmInfoText>

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

                <StyledEnd>
                    <SmInfoText>strengths:</SmInfoText>
                    Conjuring human friendly web apps, simple and clean layouts
                    that are easy to navigate, improved web interactivity,
                    readable code. creativity, always learning move some of
                    about here.
                </StyledEnd>
            </BottomRow>
        </StyledHome>
    );
};

export default Home;
