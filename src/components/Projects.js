import styled from "styled-components";
//import  Button  from "./Buttons/Button.svg";
import  PressedButton  from "./Buttons/PressedButton.svg";
import NewButton from '../assets/NewButton.svg'

/*    
   //clear: left;
 
flex: 1 1 auto;

overflow: auto;


    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

 

*/

const StyledProjectDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   width: 100%;
min-height: 60vh;
`;

const InfoText = styled.div`
  //  color: #6f6f79;
  color: #525252; 
    font-size: 2em;
    margin-left: auto;
    float: right;
    display: flex;
`;
/*
const SmInfoText = styled.div`
  //  color: #6f6f79;
  color: #525252; 
    display: flex;
`;*/

const StyledProject = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
`;
//<h1>Projects</h1>  

 export const StyledButton = styled.button`
  //  display: inline-block;
    font-size: 2.2rem;
    font-family: 'VT323', monospace;
width: 9rem;
height: 5rem;          
cursor: pointer;
background-image: url(${NewButton});
   background-repeat: no-repeat;
 // &:hover {background-image: url(${PressedButton});
  // background-repeat: no-repeat;}
`;



const Projects = () => {
    return (
        <StyledProjectDiv>



        <InfoText>inventory? items? crafted?</InfoText>   
        
                <StyledProject>
                    <h2> Library App </h2>
                    <div className="img"></div>
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
                    <div className="img"></div>
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
                <StyledButton >resume</StyledButton>
        
        </StyledProjectDiv>
    );
};

export default Projects;
