import { Link } from "react-router-dom";

import styled from "styled-components";
import { StyledProject, StyledPl, InfoText, SmInfoText } from "../../theme";

const Library = () => {


    return (
       
       
       
           <StyledProject>
                    <h2> Library App </h2>
                    <StyledPl />
                    <ul>
                    
                        <li> <Link to={{pathname: "https://www.kristinharris.dev/library/"  }} target="_blank">  link Live </Link>


                            <a href="https://www.kristinharris.dev/library/" target="_blank"
            rel="noreferrer">
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
                        </li>
                        <li>A CRUD web app - description here.</li>
                        <li>
                            Utilized : React, firebase- auth, nosql cloud
                            database, connected to Goodreads API
                        </li>
                        &gt; blinking arrow to go to next
                    </ul>

                </StyledProject>

       
       
       
        )}

        export default Library