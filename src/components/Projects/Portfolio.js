import { Link } from "react-router-dom";

import styled from "styled-components";
import { StyledProject, StyledPl, InfoText, SmInfoText } from "../../theme";

//! not using
// insert fun facts underneath link to code to summarize some of the cool things i built in
// like the hp bars, achievements, svgs? 
// just in case they look but dont want to read the code. 

const Portfolio = () => {
    return (

                <StyledProject>
                    <h2> Portfolio </h2>
                    <StyledPl />
                    <ul>
                        <li>
                            <SmInfoText as="a"
                                href="https://github.com/reverie64/reverie64.github.io"
                                target="_blank"
                                rel="noreferrer"
                            >
                                the magic beneath the surface - view the source
                            </SmInfoText>


                        </li>
                        <li>Custom React web app using </li>
                    </ul>
                </StyledProject>
    )
         }

export default Portfolio