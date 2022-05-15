import styled from 'styled-components';
/* not sure about:
  <li> title:</li>
        <li>background</li>
                        
                             <li>faction millennial </li>
spawn zone amarillo
stats, skills, talents, exp. level up 
dislikes: escort quests, choosing color palettes

.about-content {
    display: flex;
}

.about-bottom {
    display: flex;
}


const StyledContent = styled.div`
 display: flex;
 flex-direction: row;
`;
*/

const StyledDiv = styled.div`
display: flex;
  width: 200px;
  height: 250px;
    border: 2px solid #383838;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
`;


const About = () => {
    return (
      
            <main className="container">
                <h1>character bio</h1>
                <p className="info-text">character bio?</p>

            
                <div className="content">
                    <div className="pic"></div>
                    <StyledDiv>image placeholder</StyledDiv>
                    <ul>  
                   <h2>Kristin Harris</h2> 
                   character bio/profile/ in depth/stats?
                        <li> lvl 32</li>
                        <li>software developer mage</li>
                        <li> town: austin - think of diff name </li>
                   <li>zone: texas hostile- red text </li>
                        <li>familiars: cisco and akari</li>
                        <li> currently chosen the front end talent tree</li>
                        <li> questing: currently leveling up: </li>
                        <li>interests: anime, video games, hiking, food</li>
                    </ul>
                </div>
                <div className="content">
                   
                    <ul>
                        recent/pinned achievements:
                        <li> re skilled - change from teacher to tech</li>
                        <li>
                            new campaign unlocked covid- achievement survived
                            two years
                        </li>
                        pinned achievements: gain an apprentice.
                        like many in the millennial faction, she/i? discovered 
                        her talent using the ancient technologies of xanga
                        and myspace. also something about mod wii and linux emulators. 
                         
                    </ul>
                </div>
            </main>
      
    );
};

export default About;
