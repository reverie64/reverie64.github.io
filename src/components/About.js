import styled from "styled-components";

import { Main, Row, InfoText, SmInfoText } from "../theme";
import testpic from "../assets/testpic.png"


/* not sure about:
  character bio/profile/ in depth/stats?
  character title:
        background for name of blurb? or somewhere here
faction millennial
stats, skills, talents, exp. level up 
dislikes: escort quests, choosing color palettes

town: austin - think of diff name 
gain an apprentice. 

like many in the millennial faction,

     <SmInfoText>exp- all skills, tech stacks xp bar</SmInfoText>

     display: flex;
   flex-wrap: wrap;
 flex-direction: row;
   clear: left;
flex: 1 1 auto;
overflow: auto;

*/

const StyledAboutDiv = styled(Main)`
    // justify-content: center;
    // border: 10px solid purple;
`;

const TitleRow = styled(Row)`
    align-items: flex-start;
`;

const TopRow = styled(Row)`
    align-items: flex-start;
`;

const MiddleRow = styled(Row)``;

const BottomRow = styled(Row)`

flex-direction: column;

`;


//! for image placeholder
const StyledPl = styled.div`
background-image: url(${testpic});
background-repeat: no-repeat;
    display: flex;
   // width: 150px;
   // height: 150px;
    border: 2px solid #84a59d;
    border-radius: 10px 10px;
        height: 20vh;
        width: 20vw;
    //   min-height: 20vh;
  //  min-width: 20vw;
 //   flex-grow: 1;
`;

   

const About = () => {
    return (
        <StyledAboutDiv>
        <TitleRow>
   <h2>Kristin Harris</h2>
    <InfoText>character bio</InfoText>
        </TitleRow>
            <TopRow>
                <StyledPl />
                <ul>
                 
              
                    <li> Level 32 Human Software Developer</li>
                    <li> town: austin  </li>
                    <li>zone: texas hostile- red text </li>
                    <li> spawn area: amarillo</li>
                    <li>familiars: cisco and akari</li>
                    <li> currently chosen the front end talent tree</li>
                    <li> questing: currently leveling up: </li>
                    <li>interests: anime, video games, hiking, food</li>
                </ul>
               
            </TopRow>

            <MiddleRow>
              
                <InfoText>exp, skills and stats?</InfoText>
            </MiddleRow>

            <BottomRow>
            <ul className="quests">
                <li>
                    needs to level up .... skills to unlock the talent tree/spec
                    "fullstack" -
                </li>
                <li>
                    needs to discover.... to upgrade the skill "fullstack" spec.
                </li>
                talent tree? to full stack spec. skills //change education -
                degrees
                
                    current questline: fullstack 
                    future quest lines: nodeJS
                    MongoDB, nextJS side quests: main quest:
                </ul>
              
            </BottomRow>
        </StyledAboutDiv>
    );
};

export default About;
