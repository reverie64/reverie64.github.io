import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { getDefaultNormalizer } from "@testing-library/react";



const Main = () => {
 
  

  const git = () =>    window.open("http://github.com/reverie64");
  const mail = () => window.open('mailto: kristinh889@gmail.com');
  const linkedin = () => window.open("http://linkedin.com/in/kristinharris64");

    return (
        <main>  
              
              
        <h1>Hi!</h1><h2>I'm Kristin</h2> <br />
        <p>and I'm a frontend developer. <br />
         Full site coming soon. <br /> <br />
         For now, <br /><br />
         visit my <FontAwesomeIcon icon={faGithub} onClick={git} alt='github' className="link" /> 
        { /* <br /> 
          send me an <FontAwesomeIcon icon={faEnvelope} onClick={mail} alt='email' className="link" /> */}
          <br /> 
          or find me on <FontAwesomeIcon icon={faLinkedin} onClick={linkedin} alt='linkedin' className="link" />
         </p>
        </main>
    


    )


}

export default Main


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
        </Link> */