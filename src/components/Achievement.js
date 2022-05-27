import styled from "styled-components";

import Section from "../assets/Section.svg";

const StyledAchv = styled.div`
    height: 10vh;
    width: 30vw;
    background-image: url(${Section});
    border: 3px grey outset;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
        0 2px 2px rgba(0, 0, 0, 0.3), 0 0 4px 1px rgba(0, 0, 0, 0.2),
        inset 0 3px 2px rgba(255, 255, 255, 0.22),
        inset 0 -3px 2px rgba(0, 0, 0, 0.15),
        inset 0 20px 10px rgba(255, 255, 255, 0.12),
        0 0 4px 1px rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.2);
    border: 7px outset #e0e0e0;
    //text-align: center;
    // display: inline-block;
    display: flex;
    // flex: 1 1 auto;
`;


const Achievement = () => {

    
    return (
        <StyledAchv>Achievement Unlocked Stay awhile and Listen</StyledAchv>
    );
};


      export default Achievement;