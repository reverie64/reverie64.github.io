import { Link } from "react-router-dom";

import styled from "styled-components";
import { StyledProject, StyledPl, InfoText, SmInfoText } from "../../theme";

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