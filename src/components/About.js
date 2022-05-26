import styled from "styled-components";
/* not sure about:
  character title:
        background for name of blurb? or somewhere here
faction millennial
spawn zone amarillo
stats, skills, talents, exp. level up 
dislikes: escort quests, choosing color palettes
   <h1>character bio</h1>

*/

/*     display: flex;
   flex-wrap: wrap;
 flex-direction: row;
   //clear: left;
  //  min-height: 40vh;
//min-width: 55vw;
flex: 1 1 auto;
width: 100%;
height: 100%;
overflow: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;



 
    flex-direction: row;

  

 

*/

const StyledAboutDiv = styled.div`
 display: flex;
// flex-direction: column;
  //  align-items: flex-start;
   // justify-content: center;
    flex-wrap: wrap;
    width: 100%;
min-height: 60vh;

 // border: 10px solid purple;
`

//! for image placeholder
const StyledPl = styled.div`
    display: flex;
    width: 200px;
    height: 250px;
    border: 2px solid #383838;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
`;


const InfoText = styled.div`
  //  color: #6f6f79;
  color: #525252; 
    font-size: 2em;
    margin-left: auto;
    float: right;
    display: flex;
`;

const SmInfoText = styled.div`
  //  color: #6f6f79;
  color: #525252; 
    display: flex;
`;

const About = () => {
    return (
      <StyledAboutDiv>
              
                <StyledPl>image placeholder</StyledPl>
                    <InfoText>character bio</InfoText>
                <ul>
                    <h2>Kristin Harris</h2>
                    character bio/profile/ in depth/stats?
                    <li> lvl 32</li>
                    <li>software developer mage</li>
                    <li> town: austin - think of diff name </li>
                    <li>zone: texas hostile- red text </li>
                    <li> spawn area: amarillo</li>
                    <li>familiars: cisco and akari</li>
                    <li> currently chosen the front end talent tree</li>
                    <li> questing: currently leveling up: </li>
                    <li>interests: anime, video games, hiking, food</li>
                </ul>
                

               <InfoText>exp and stats?</InfoText> 
                <ul> 
                    recent/pinned achievements:
                    <li> re skilled - change from teacher to tech</li>
                    <li>
                        new campaign unlocked covid- achievement survived two
                        years
                    </li>
                    <li>gain an apprentice. </li>
                    like many in the
                    millennial faction, she/i? discovered her talent using the
                    ancient technologies of xanga and myspace. also something
                    about mod wii and linux emulators.
                </ul>
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
                current questline: fullstack future quest lines: nodeJS MongoDB,
                nextJS side quests: main quest:
            </section>
            <section className="ed-content"> 
 <SmInfoText>achievements?</SmInfoText> 
                undergrad sociology 2014 39 graduate hours with special
                interest/relevant coursework in diversity and inclusion.
                responsiblity to continue to quest so web is accessible for all.
            </section>
           
        </StyledAboutDiv>
    );
};

export default About;
