import { Link } from "react-router-dom";


import styled from "styled-components";

//import NewButton from "./assets/NewButton.svg";
import { Main, Row, InfoText, SmInfoText } from "../../theme";
import TestPdf from "../../assets/TestPdf.pdf";
import Portfolio from "../Projects/Portfolio";
import Library from "../Projects/Library";
import NewButton from "../../assets/NewButton.svg";


const StyledProjectDiv = styled(Main)`
  //  justify-content: space-between;
 //   align-items: space-between;
  
        
`;


const TopRow = styled(Row)`
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
`;

const MiddleRow = styled(Row)`
align-items: stretch;
`;

const AnotherRow = styled(Row)`
    align-items: flex-start;

    justify-content: center;
`;

const BottomRow = styled(Row)` //code doesn't work
flex-direction: column;
margin-top: 10 vh;
justify-content: center; //! jsut align button, not text if added
overflow-y: scroll;
`;

//<h1>Projects</h1>


 const StyledButton = styled.button`
display: flex;
align-items: center; //! adjust so centered in fill
justify-content: center;
    font-size: 1.15rem;

    width: 9rem;
    height: 5rem;
    cursor: pointer;
    background-image: url(${NewButton});
    background-repeat: no-repeat;
      user-select: none; // disables text selection on ios
  
   /*  &:hover {  
        //  transition: filter 250ms; 
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
        }
   
&:before {
  height: 0%;
  width: 2px;
}*/


`;

/*         <StyledFooter
            as="a"
            href="https://github.com/reverie64/"
            target="_blank"
            rel="noreferrer"
        >
            {" "}
            🖌 by Kristin Harris{" "}
        </StyledFooter>*/ 

// ul level over 9000 

const Projects = () => {
    return (
        <StyledProjectDiv>
            <TopRow>
                <InfoText>inventory? items? crafted? inspect?</InfoText>
                <SmInfoText>Code</SmInfoText>
            </TopRow>

            <MiddleRow>
              <Library />
            <Portfolio />
          
            </MiddleRow>
            <AnotherRow>    <StyledButton
                    as="a"
                    href={TestPdf}
                    target="_blank"
                    rel="noreferrer"
                >
                    resume
                </StyledButton> </AnotherRow>

            <BottomRow>
             
              <ul>
                    <SmInfoText> recent/pinned achievements: </SmInfoText>
                    <li> re skilled - change from teacher to tech</li>
                    <li>
                        new campaign unlocked covid- achievement survived *two*
                        years
                    </li>
                    <li>
                    discovered her
                    talent using the ancient technologies of xanga and myspace.
                    also something about mod wii and linux emulators.</li>
                </ul>
              <section className="ed-content">
                    <SmInfoText>achievements?</SmInfoText>
                    undergrad sociology 2014 39 graduate hours with special
                    interest/relevant coursework in diversity and inclusion.
                    responsibility to continue to quest so web is accessible for
                    all.
                </section>   
            
            </BottomRow>
        </StyledProjectDiv>
    );
};


export default Projects;
