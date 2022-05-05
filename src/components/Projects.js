import styled from 'styled-components';
//!head text clss moved to home??

const Projects = () => {
    return (
        <div className="container-border">
            <div className="container">
            
                <h1 className="head-text">Projects</h1>
                <div className="projects-content">
                    <div className="project">
                        <h2> Library App </h2>
                        <div className="img"></div>
                        <ul>
                            <li>
                                <a
                                    href="https://www.kristinharris.dev/library/"
                                >
                                    Live
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
                    </div>

                    <div className="project">
                        <h2> Portfolio </h2>
                        <div className="img"></div>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/reverie64/library" target="_blank" rel="noreferrer"
                                >
                                    the magic beneath the surface - view the source
                                </a>
                            </li>
                            <li>Custom React web app using </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
