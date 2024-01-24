//! check on responsiveness - need media q's?, text size nneds to adapt
//! finalize color - both themes
//! finalize svgs : color, optimize
//! finalize text
//! keep on gh pages or change ? change back to hashrouter if keeping.
// fav icon 
// deploy ... profit (:

import styled from "styled-components";

import Bars from "./Bars/Bars";
import { Main, Column, InfoText, SmInfoText } from "../../theme";
import Badges from "./Badges";
import testpic from "../../assets/testpic.png";
import SmMe from "./assets/SmMe.svg";

const StyledHome = styled(Main)`
    justify-content: flex-start;
`;

const LeftCol = styled(Column)`
    justify-content: space-around;
    align-items: flex-start;
    width: 30%;
`;

//! shrink char overview - repsonsive flex end self
const RCol = styled(Column)`
    justify-content: space-around;
    align-items: flex-start;
    width: 60%;
    //  border: 1px solid black;
`;



const StyledName = styled.div`
    text-shadow: 4px 4px 0 #f8f2f6;
    font-size: 1.7rem;
    font-weight: bold;
    padding-right: 3vw;
    line-height: 1.7rem;
`;

const XSmInfoText = styled(SmInfoText)`
    //  color: #6f6f79;
    color: #525252;
    display: flex;
    font-size: 0.9rem;
`;


const StyledSmMe = styled.div`
    min-height: 12vh;
    min-width: 8vw;
    background-image: url(${SmMe});
    background-repeat: no-repeat;
    display: flex;
`;

//! temp
const StyledImg = styled.div`
    //background-image: url(${testpic});
    //background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    border: 2px solid #84a59d;
    border-radius: 10px 10px;
    height: 20vh;
    width: 12vw;
    //   min-height: 20vh;
    //  min-width: 20vw;
    //   flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

const StyledLevel = styled.div`
padding-top: 1vh;
    display: flex;
`;

const StyledBasicInfo = styled.ul`
    //! row for each label and info w/ no line breaks
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
   // height: 17vh;
   // width: 30vw;
 //   border: 5px ridge #9787c1;
    //flex-wrap: wrap;
    width: 100%;

`;

/*
const Level = styled.div`
    font-size: 1.75rem;
    font-weight: bold;*/

const StyledStr = styled.div`
    display: flex;
    flex-direction: column;
  //  border: 1px solid black;

`;



/* 
(?)cursor or button on top? - with hover that says how was this calculated and explain.
create custom tooltip later 
 <div class="tooltip">Hover over me
  </div>
 <span class="tooltiptext">Tooltip text</span>
currently seeking new guild. </li>

       bottom of page:   move some of about section here - pinned achv?
*/

const Home = () => {
  //! need to use this code on about too.
  // make small pic into a gif that moves slightly like pokemon sprites
  
    /*
        const findLevel = (birthYear) => {
            birthYear = 1989;
            let date = new Date();
            //let birthday = new Date(birthYear);
            let age = date.getFullYear() - birthYear;
            //birthday.getFullYear();
            setLevel(age)
            return level;
        };
    */

    return (
        <StyledHome>
            <LeftCol> <StyledName>Kristin Harris</StyledName>
            
                <StyledImg> <StyledSmMe /> <StyledLevel> lvl. 32 </StyledLevel>
                </StyledImg>
                <div className="ab">
                    <SmInfoText>Abilities:</SmInfoText>
                    <Badges />
                </div>
            </LeftCol>

            <RCol>
                <InfoText>character overview</InfoText>
                <Bars />
                <StyledBasicInfo>
                    <li>
                        <XSmInfoText>class:</XSmInfoText>
                        software developer
                    </li>
                    <li>
                        <XSmInfoText>specialty:</XSmInfoText>front end
                    </li>
                    <li>
                        {" "}
                        <XSmInfoText>pronouns:</XSmInfoText>she/ her
                    </li>
                </StyledBasicInfo>
                <StyledStr>
                    <ul>
                        {" "}
                        <SmInfoText>strengths:</SmInfoText>
                        <li> Conjuring human friendly web apps </li>
                        <li> clean, easy to navigate layouts </li>
                        <li> improved web interactivity </li>
                        <li> readable code </li>
                        <li> creativity </li>
                        <li> always learning </li>
                    </ul>
                </StyledStr>
            </RCol>
        </StyledHome>
    );
};

export default Home;
