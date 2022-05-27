import styled from "styled-components";
//import  Button  from "./Buttons/Button.svg";
import PressedButton from "./Buttons/PressedButton.svg";
import NewButton from "../assets/NewButton.svg";
import { Main, Row, InfoText, SmInfoText } from "../theme";
import TestPdf from "../assets/TestPdf.pdf";

const StyledProjectDiv = styled(Main)`
    justify-content: space-around;
`;

const StyledProject = styled.div`
    //!unsure about layout. , links arent working
    display: flex;
    flex-direction: column;
    //justify-content: space-around;
    width: 50%;
`;

const TopRow = styled(Row)``;

const MiddleRow = styled(Row)``;

const BottomRow = styled(Row)``;

//<h1>Projects</h1>

const StyledPl = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border: 2px solid #84a59d;
    border-radius: 10px 10px;
    background-color: rgba(180, 153, 180, 0.479);
`;

export const StyledButton = styled.button`
display: flex;
align-items: center; //! adjust so centered in fill
justify-content: center;
    font-size: 2.2rem;
    font-family: "VT323", monospace;
    width: 9rem;
    height: 5rem;
    cursor: pointer;
    background-image: url(${NewButton});
    background-repeat: no-repeat;
    // &:hover {
    //background-image: url(${PressedButton});
    // background-repeat: no-repeat;}
`;

const Projects = () => {
    return (
        <StyledProjectDiv>
            <TopRow>
                <InfoText>inventory? items? crafted? inspect?</InfoText>
            </TopRow>

            <MiddleRow>
                <StyledProject>
                    <h2> Library App </h2>
                    <StyledPl />
                    <ul>
                        <li>
                            <a href="https://www.kristinharris.dev/library/">
                                Live|
                            </a>

                            <a
                                href="https://github.com/reverie64/library"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source
                            </a>
                        </li>
                        <li>A CRUD web app - description here.</li>
                        <li>
                            Utilized : React, firebase- auth, nosql cloud
                            database, connected to Goodreads API
                        </li>
                        &gt; blinking arrow to go to next
                    </ul>
                </StyledProject>

                <StyledProject>
                    <h2> Portfolio </h2>
                    <StyledPl />
                    <ul>
                        <li>
                            <a
                                href="https://github.com/reverie64/reverie64.github.io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                the magic beneath the surface - view the source
                            </a>
                        </li>
                        <li>Custom React web app using </li>
                    </ul>
                </StyledProject>
            </MiddleRow>

            <BottomRow>
                say something here.
                <StyledButton
                    as="a"
                    href={TestPdf}
                    target="_blank"
                    rel="noreferrer"
                >
                    resume
                </StyledButton>
            </BottomRow>
        </StyledProjectDiv>
    );
};


export default Projects;
