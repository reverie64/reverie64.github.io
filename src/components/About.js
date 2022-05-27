import styled from "styled-components";

import { Main, Row, InfoText, SmInfoText } from "../theme";

/* not sure about:
  character title:
        background for name of blurb? or somewhere here
faction millennial
stats, skills, talents, exp. level up 
dislikes: escort quests, choosing color palettes

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

const TopRow = styled(Row)``;

const MiddleRow = styled(Row)``;

const BottomRow = styled(Row)``;

//! for image placeholder
const StyledPl = styled.div`
    display: flex;
    width: 200px;
    height: 250px;
    border: 2px solid #383838;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
`;

const About = () => {
    return (
        <StyledAboutDiv>
            <TopRow>
                <StyledPl>image placeholder</StyledPl>
                <ul>
                    <h2>Kristin Harris</h2>
                    character bio/profile/ in depth/stats?
                    <li> Level 32 Human Software Developer</li>
                  
                    <li> town: austin - think of diff name </li>
                    <li>zone: texas hostile- red text </li>
                    <li> spawn area: amarillo</li>
                    <li>familiars: cisco and akari</li>
                    <li> currently chosen the front end talent tree</li>
                    <li> questing: currently leveling up: </li>
                    <li>interests: anime, video games, hiking, food</li>
                </ul>
                <InfoText>character bio</InfoText>
            </TopRow>

            <MiddleRow>
                <ul>
                    <SmInfoText> recent/pinned achievements: </SmInfoText>
                    <li> re skilled - change from teacher to tech</li>
                    <li>
                        new campaign unlocked covid- achievement survived two
                        years
                    </li>
                    <li>gain an apprentice. </li>
                    like many in the millennial faction, she/i? discovered her
                    talent using the ancient technologies of xanga and myspace.
                    also something about mod wii and linux emulators.
                </ul>
                <InfoText>exp and stats?</InfoText>
            </MiddleRow>

            <BottomRow>
                <SmInfoText>exp- all skills, tech stacks xp bar</SmInfoText>
                <li>
                    needs to level up .... skills to unlock the talent tree/spec
                    "fullstack" -
                </li>
                <li>
                    needs to discover.... to upgrade the skill "fullstack" spec.
                </li>
                talent tree? to full stack spec. skills //change education -
                degrees
                <section className="quests">
                    current questline: fullstack future quest lines: nodeJS
                    MongoDB, nextJS side quests: main quest:
                </section>
                <section className="ed-content">
                    <SmInfoText>achievements?</SmInfoText>
                    undergrad sociology 2014 39 graduate hours with special
                    interest/relevant coursework in diversity and inclusion.
                    responsibility to continue to quest so web is accessible for
                    all.
                </section>
            </BottomRow>
        </StyledAboutDiv>
    );
};

export default About;
