import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

import { ReactComponent as Github } from "../images/Github.svg"



/* .contact-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}*/ 

const StyledAchv = styled.div`
height: 75px;
width: 250px;
background-color: brown;
border: 3px grey outset;
box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 2px 2px rgba(0,0,0,0.3),
    0 0 4px 1px rgba(0,0,0,0.2),
    inset 0 3px 2px rgba(255,255,255,.22), 
    inset 0 -3px 2px rgba(0,0,0,.15), 
    inset 0 20px 10px rgba(255,255,255,.12), 
    0 0 4px 1px rgba(0,0,0,.1), 
    0 3px 2px rgba(0,0,0,.2);
`;



export const StayListen = () => {

return (
   <StyledAchv>
   achievement Unlocked
       Stay a hile and Listen
   </StyledAchv>
)

};


const Contact = () => {
    const git = () => window.open("http://github.com/reverie64");
    const linkedin = () =>
        window.open("http://linkedin.com/in/kristinharris64");

    const mail = () => window.open("mailto: kristinh889@gmail.com");
    return (
        
        <div className="container">
            <h1 >How to reach me</h1>
            <p className="info-text">title?</p>
            <div className="contact-content"> 

            <Github />


            visit my
            <FontAwesomeIcon
                icon={faGithub}
                onClick={git}
                alt="github"
                className="link"
            />
            send me an
            <FontAwesomeIcon
                icon={faEnvelope}
                onClick={mail}
                alt="email"
                className="link"
            /> 
            or find me on
            <FontAwesomeIcon
                icon={faLinkedin}
                onClick={linkedin}
                alt="linkedin"
                className="link"
            />
            questing nearby and want to get coffee? i'll even cross the river.
            lfg?
            </div>
  <StayListen />
        </div>
       
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
