//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Linkedin } from "../assets/LinkedIn.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";
import Section from "../assets/Section.svg";
import { Main, Row, InfoText, SmInfoText } from "../theme";

//! unsure about layout

const StyledContactDiv = styled(Main)`
     //    justify-content: space-around; 
`;

const TopRow = styled(Row)``;

const MiddleRow = styled(Row)``;

const BottomRow = styled(Row)``;

const StyledGithub = styled(Github)`
    height: 10vh;
`;

const StyledLinkedIn = styled(Linkedin)`
    height: 10vh;
`;
const StyledMail = styled(Mail)`
    height: 10vh;
`;

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

const Contact = () => {
    const git = () => window.open("http://github.com/reverie64");
    const linkedin = () =>
        window.open("http://linkedin.com/in/kristinharris64");

    const mail = () => window.open("mailto: kristinh889@gmail.com");
    return (
        <StyledContactDiv>
            <TopRow>
                <InfoText>How to reach me?</InfoText>{" "}
            </TopRow>

            <MiddleRow>
                visit my
                <StyledGithub onClick={git} alt="github" className="link" />
                send me an
                <StyledMail onClick={mail} alt="email" className="link" />
                or find me on
                <StyledLinkedIn
                    onClick={linkedin}
                    alt="linkedin"
                    className="link"
                />
            </MiddleRow>
            <BottomRow>
                questing nearby and want to get coffee? i'll even cross the
                river. lfg?
            </BottomRow>

            <StyledAchv>Achievement Unlocked Stay awhile and Listen</StyledAchv>
        </StyledContactDiv>
    );
};

export default Contact;

/*
  , email me
         <a href={`mailto:kristinh889@gmail.com`}>
                    kristinh889@gmail.com
                </a>
            to='kristinh889@gmail.com'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}*/
