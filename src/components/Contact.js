import { Link } from "react-router-dom";

import styled from "styled-components";

import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Linkedin } from "../assets/LinkedIn.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";

import { Main, Row, InfoText, SmInfoText } from "../theme";

//! unsure about layout and style, links arent working when importing as react components. change to img for now.

const StyledContactDiv = styled(Main)`
    //    justify-content: space-around;
     // border: 7px solid pink;
`;

const TopRow = styled(Row)`
    align-items: flex-start;
`;

const MiddleRow = styled(Row)`
    align-items: flex-start;
    flex-direction: column;
`;

const BottomRow = styled(Row)`
    align-items: flex-end;
`;

const Compartment = styled.div`
  //  border: 7px inset #dae7e4;
 //   background-color: #b5cfca;
//    outline: 5px inset #dae7e4;
    width: 100%;
    // align-items: space-between;
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

/*         <StyledFooter
            as="a"
            href="https://github.com/reverie64/"
            target="_blank"
            rel="noreferrer"
        >
            text
        </StyledFooter>
         alt="github" 
        
      
   

{mail} alt="email" 
    alt="linkedin"
        */

const Contact = () => {


    return (
        <StyledContactDiv>
            <TopRow>
                <InfoText>How to reach me?</InfoText>{" "}
            </TopRow>

            <MiddleRow>


                <Compartment>
                    visit my
                    <StyledGithub
                        onClick={(e) => window.open("http://github.com/reverie64", '_blank')
                        }
                    />
                </Compartment>

                <Compartment>
                    send me an
                    <StyledMail
                        onClick={(e) =>  window.open("mailto: kristinh889@gmail.com")
                          
                        }
                    />
                </Compartment>

                <Compartment>
                    {" "}
                    or find me on
                    <StyledLinkedIn
                        onClick={(e) => 
        window.open("http://linkedin.com/in/kristinharris64")
                           
                        }
                    />
                </Compartment>
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
