import { Link } from "react-router-dom";

import styled from "styled-components";

import {
    Main,
    Row,
    StyledPl,
    InfoText,
    SmInfoText,
} from "../../theme";
import TestPdf from "../../assets/TestPdf.pdf";
//import Portfolio from "../Projects/Portfolio";
//import Library from "../Projects/Library";
import NewButton from "../../assets/NewButton.svg";


//! code messsed up. dont know where. 
// need to import library. js and portfolio. js, remove static text 

const StyledProjectDiv = styled(Main)`
    //  justify-content: space-between;
    // align-items: space-between;
    flex-direction: column;
   // flex-wrap: wrap;
 //   border: 1px solid black;
`;

const StyledProject = styled.div`
    //!unsure about layout. , links arent working
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: space-around;
    width: 50%;
        border: 7px inset #dae7e4;
    background-color: #b5cfca;
    outline: 5px inset #dae7e4;
   // margin-right: 1vw;
    padding: 1vh;
  
`;

const TopRow = styled(Row)`
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid black;
`;

const MiddleRow = styled(Row)`
    align-items: stretch;
      outline: 1px solid black;
`;

const AnotherRow = styled(Row)`
    //   align-items: flex-start;
    //  justify-content: center;

`;

const BottomRow = styled(Row)`
    //code doesn't work
   // flex-direction: column;
  //    margin-top: 10 vh;
    //  justify-content: center; //! jsut align button, not text if added
    // overflow-y: scroll;
    border: 1px solid black;
`;

// <AnotherRow>
//  </AnotherRow>

//<h1>Projects</h1>

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    width: 9rem;
    height: 5rem;
    background-image: url(${NewButton});
    background-repeat: no-repeat;
    user-select: none; // disables text selection on ios
            cursor: pointer;
    /*
&:hover {
    border: 3px solid purple;
        cursor: pointer;
}*/
`;

/*  <ul>
                    <SmInfoText> recent/pinned achievements: </SmInfoText>
                    <li> re skilled - change from teacher to tech</li>
                    <li>
                        new campaign unlocked covid- achievement survived *two*
                        years
                    </li>
                    <li>
                        discovered her talent using the ancient technologies of
                        xanga and myspace. also something about mod wii and
                        linux emulators.
                    </li>
                </ul>
                <section className="ed-content">
                    <SmInfoText>achievements?</SmInfoText>
                    undergrad sociology 2014 39 graduate hours with special
                    interest/relevant coursework in diversity and inclusion.
                    responsibility to continue to quest so web is accessible for
                    all.
                </section>*/



// ul level over 9000
//! move info text of inventory etc outside of square

const Projects = () => {
    return (
        <StyledProjectDiv>
            <TopRow>
                <InfoText>inventory? items? crafted? inspect?</InfoText>
                
                <SmInfoText>Code</SmInfoText>
            </TopRow>

            <MiddleRow>
                <StyledProject>
                    <h2> Library App </h2>
                    <StyledPl />
                            <Link
                                to={{
                                    pathname:
                                        "https://www.kristinharris.dev/library/",
                                }}
                                target="_blank"
                            >
                                {" "}
                                link Live{" "}
                            </Link>
                            <a
                                href="https://www.kristinharris.dev/library/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live
                            </a>
                            |
                            <a
                                href="https://github.com/reverie64/library"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source
                            </a>
                      
                </StyledProject>

                <StyledProject>
                    <h2> Portfolio </h2>
                    <StyledPl />
            
                            <a
                                href="https://github.com/reverie64/reverie64.github.io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                the magic beneath the surface - view the source
                            </a>
                 
           
                </StyledProject>
            </MiddleRow>

            <BottomRow>
                <StyledButton
                    as="a"
                    href={TestPdf}
                    target="_blank"
                    rel="noreferrer"
                >
                    resume
                </StyledButton>{" "}
               
            </BottomRow>
        </StyledProjectDiv>
    );
};

export default Projects;
