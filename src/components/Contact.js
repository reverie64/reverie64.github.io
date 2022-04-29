import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    const git = () => window.open("http://github.com/reverie64");
    const linkedin = () =>
        window.open("http://linkedin.com/in/kristinharris64");

    return (
        <div className="contact">
                For now, <br />
                <br />
                visit my{" "}
                <FontAwesomeIcon
                    icon={faGithub}
                    onClick={git}
                    alt="github"
                    className="link"
                />
                {/* <br /> 
          send me an <FontAwesomeIcon icon={faEnvelope} onClick={mail} alt='email' className="link" />    */}
                <br />
                or find me on{" "}
                <FontAwesomeIcon
                    icon={faLinkedin}
                    onClick={linkedin}
                    alt="linkedin"
                    className="link"
                />
            
        </div>
    );
};

export default Contact;

/* 
         
         , email me
         <Link
            to='kristinh889@gmail.com'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
        
 const mail = () => window.open('mailto: kristinh889@gmail.com');

        */
