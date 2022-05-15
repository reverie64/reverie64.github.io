import styled from 'styled-components';


/* 

.projects-content {
    display: flex;
    flex-direction: row;
    space around?
}

.project {
    width: 50%;


}*/

const StyledProject = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
`

const Projects = () => {
    return (
    
            <div className="container">
            
                <h1>Projects</h1>   <p className="info-text"> inventory </p>
                <div className="content">
                    <StyledProject>
                        <h2> Library App </h2>
                        <div className="img"></div>
                        <ul>
                            <li>
                                <a
                                    href="https://www.kristinharris.dev/library/"
                                >
                                    Live| 
                                </a>

                                <a
                                    href="https://github.com/reverie64/library" target="_blank" rel="noreferrer"
                                >
                                     Source
                                </a>
                            </li>
                            <li>A CRUD web app - description here.</li>
                            <li>
                                Utilized : React, firebase- auth, nosql cloud
                                database, connected to Goodreads API
                            </li>
                        </ul>
                        </StyledProject>

                   <StyledProject>
                        <h2> Portfolio </h2>
                        <div className="img"></div>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/reverie64/reverie64.github.io" target="_blank" rel="noreferrer"
                                >
                                    the magic beneath the surface - view the source
                                </a>
                            </li>
                            <li>Custom React web app using </li>
                        </ul>
                        </StyledProject>
                </div>
            </div>
      
    );
};

export default Projects;
