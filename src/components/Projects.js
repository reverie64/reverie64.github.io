const Projects = () => {

    return (
        <div className="container">
            <h1 className="head-text">Projects</h1>
         <div className="content">

                <h2> Library App </h2>
                <ul>
                    <li>
                        <a href={`https://www.kristinharris.dev/library/`}>Live</a> | <a href={`https://github.com/reverie64/library`}>Source</a>
                    </li>
                    <li>
                        A CRUD web app - description here.
                    </li>
                    <li>Utilized : React, firebase- auth, nosql cloud database, connected to Goodreads API  </li>
                </ul>
            </div>

            <div className="project">
                <h2> Portfolio </h2>
                <ul>
                    <li>| <a href={`https://github.com/reverie64/library`}>view the magic beneath the surface - source</a></li>
                    <li>Custom React web app using </li>
                </ul>
            </div>
        </div>
    );
};

export default Projects;
