import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const git = () => window.open("http://github.com/reverie64");
    const linkedin = () =>
        window.open("http://linkedin.com/in/kristinharris64");

    const mail = () => window.open("mailto: kristinh889@gmail.com");
    return (
        <div className="container-border"> 
        <div className="container">
            <h1 className="head-text">How to reach me</h1>
            <div className="content"> 
            visit my
            <FontAwesomeIcon
                icon={faGithub}
                onClick={git}
                alt="github"
                className="link"
            />
            send me an
            <FontAwesomeIcon
                icon={faEnvelope}
                onClick={mail}
                alt="email"
                className="link"
            />
            or find me on
            <FontAwesomeIcon
                icon={faLinkedin}
                onClick={linkedin}
                alt="linkedin"
                className="link"
            />
            questing nearby? get a coffee.
            </div>
        </div>
        </div>
    );
};

export default Contact;

/*
  , email me
         <a href={`mailto:kristinh889@gmail.com`}>
                    kristinh889@gmail.com
                </a>
            to='kristinh889@gmail.com'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}*/
