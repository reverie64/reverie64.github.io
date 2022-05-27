//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Linkedin } from "../assets/LinkedIn.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";

import { Main, Row, InfoText, SmInfoText } from "../theme";

//! unsure about layout, links arent working

const StyledContactDiv = styled(Main)`
     //    justify-content: space-around; 
`;

const TopRow = styled(Row)``;

const MiddleRow = styled(Row)`
`;

const BottomRow = styled(Row)`

`;

const StyledGithub = styled(Github)`
    height: 10vh;
`;

const StyledLinkedIn = styled(Linkedin)`
    height: 10vh;
`;
const StyledMail = styled(Mail)`
    height: 10vh;
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
                <StyledGithub onClick={git} alt="github"  />
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

      
        </StyledContactDiv>
    );
};

export default Contact;

/*

 <StyledFooter
            as="a"
            href="https://github.com/reverie64/"
            target="_blank"
            rel="noreferrer"
        >
            {" "}
            🖌 by Kristin Harris{" "}
        </StyledFooter>


  , email me
         <a href={`mailto:kristinh889@gmail.com`}>
                    kristinh889@gmail.com
                </a>
            to='kristinh889@gmail.com'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}*/
