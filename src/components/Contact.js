import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* .contact-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}*/ 




const Contact = () => {
    const git = () => window.open("http://github.com/reverie64");
    const linkedin = () =>
        window.open("http://linkedin.com/in/kristinharris64");

    const mail = () => window.open("mailto: kristinh889@gmail.com");
    return (
        
        <div className="container">
            <h1 >How to reach me</h1>
            <div className="contact-content"> 
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
            /> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 64 64" shape-rendering="crispEdges" width="200px">
<metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
<path stroke="#525252" d="M20 10h1M22 10h24M19 11h1M46 11h1M24 12h3M30 12h3M36 12h2M39 12h1M47 12h1M44 13h1M47 13h1M20 14h1M47 14h1M45 15h1M47 15h1M45 16h1M47 16h1M20 17h1M45 17h1M47 17h1M20 18h1M45 18h1M47 18h1M45 19h1M47 19h1M45 20h1M47 20h1M45 21h1M47 21h1M45 22h1M47 22h1M45 23h1M47 23h1M20 24h1M45 24h1M47 24h1M45 25h1M47 25h1M20 26h1M45 26h1M47 26h1M20 27h1M45 27h1M47 27h1M20 28h1M45 28h1M47 28h1M45 29h1M47 29h1M45 30h1M47 30h1M45 31h1M47 31h1M45 32h1M47 32h1M20 33h1M45 33h1M47 33h1M45 34h1M47 34h1M47 35h1M21 36h1M44 36h1M47 36h1M23 37h1M26 37h3M36 37h3" />
<path stroke="#383838" d="M21 10h1M18 12h1M27 12h3M38 12h1M41 12h2M18 13h1M18 14h1M18 15h1M18 16h1M18 17h1M18 18h1M18 19h1M18 20h1M23 20h1M18 21h1M24 21h1M18 22h1M25 22h1M40 22h1M18 23h1M26 23h1M39 23h1M18 24h1M27 24h1M38 24h1M18 25h1M32 25h3M18 26h1M29 26h3M35 26h3M18 27h1M31 27h1M35 27h1M18 28h1M32 28h3M18 29h1M18 30h1M18 31h1M18 32h1M18 33h1M18 34h1M18 35h1M20 35h1M18 36h1M18 37h1M43 37h1M47 37h1M19 38h1M46 38h1M20 39h26" />
<path stroke="#a3a3a3" d="M20 11h1M45 11h1M21 12h1M44 12h1M20 13h1M45 13h1M19 27h1M19 29h1M46 29h1M19 30h1M46 30h1M19 31h1M46 31h1M46 32h1M19 34h1M46 35h1M19 36h2M45 36h2M20 37h2M44 37h2M21 38h1M23 38h10M36 38h1M42 38h1M44 38h1" />
<path stroke="#cccccc" d="M21 11h4M43 11h2M20 12h1M45 12h1M19 13h1M46 13h1M19 14h1M46 14h1M19 17h1M19 18h1M19 19h1M19 21h1M19 22h1M19 23h1M46 23h1M46 24h1M46 34h1M19 35h1M22 38h1M33 38h3M40 38h2M43 38h1" />
<path stroke="#e0e0e0" d="M25 11h5M31 11h1M41 11h2M46 15h1M46 16h1M46 20h1M46 21h1M46 22h1" />
<path stroke="#f5f5f5" d="M30 11h1M32 11h9M19 15h1M19 16h1" />
<path stroke="#7a7a7a" d="M19 12h1M22 12h2M43 12h1M46 12h1M21 13h1M45 14h1M20 15h1M20 16h1" />
<path stroke="#666666" d="M33 12h3M40 12h1M20 19h1M20 20h1M20 21h1M20 22h1M20 23h1M20 25h1M20 29h1M20 30h1M20 31h1M20 32h1M20 34h1M45 35h1M19 37h1M22 37h1M24 37h2M29 37h7M39 37h4M46 37h1M20 38h1M45 38h1" />
<path stroke="#fbb7ae" d="M22 13h20M41 14h3M21 15h1M44 18h1M44 19h1M21 35h1M44 35h1M43 36h1" />
<path stroke="#eb9993" d="M42 13h2M21 14h4M39 14h2M44 14h1M22 15h1M42 15h3M21 16h1M44 16h1M21 17h1M42 17h1M43 18h1M21 33h1M21 34h1M44 34h1M22 35h1M43 35h1M22 36h2M41 36h2" />
<path stroke="#da7b78" d="M25 14h14M23 15h19M22 16h22M22 17h20M43 17h2M21 18h2M21 19h1M21 20h1M44 20h1M21 21h1M44 21h1M21 22h1M44 22h1M21 23h1M44 23h1M21 24h1M44 24h1M21 25h1M44 25h1M21 26h1M44 26h1M21 27h1M44 27h1M21 28h1M44 28h1M21 29h1M44 29h1M21 30h1M44 30h1M21 31h1M43 31h2M21 32h2M43 32h2M22 33h23M22 34h22M23 35h20M24 36h17" />
<path stroke="#ffffff" d="M46 17h1M46 18h1M30 19h9M46 19h1M23 22h1M23 23h1M23 24h1" />
<path stroke="#000000" d="M23 18h20M22 19h1M43 19h1M22 20h1M43 20h1M22 21h1M43 21h1M22 22h1M43 22h1M22 23h1M43 23h1M22 24h1M43 24h1M22 25h1M43 25h1M22 26h1M43 26h1M22 27h1M43 27h1M22 28h1M43 28h1M22 29h1M43 29h1M22 30h1M43 30h1M23 31h20" />
<path stroke="#bebebe" d="M23 19h4M42 19h1M42 22h1M42 23h1M42 24h1M42 25h1M42 26h1M42 27h1M23 28h1M42 28h1M23 29h1M42 29h1M24 30h3M37 30h5" />
<path stroke="#e7e5da" d="M27 19h2M40 19h2M24 20h4M40 20h2M23 21h1M25 21h1M42 21h1M24 22h1M26 22h1M41 22h1M25 23h1M26 24h1M23 25h1M27 25h1M29 25h1M38 25h1M41 25h1M28 26h1M41 26h1M23 27h1M29 27h2M36 27h2M41 27h1M24 28h1M31 28h1M38 28h1M41 28h1M25 29h1M32 29h3M38 29h3M27 30h3" />
<path stroke="#f5ebdd" d="M29 19h1M39 19h1M28 20h1M31 20h1M33 20h3M38 20h2M27 21h4M32 21h2M35 21h1M37 21h2M40 21h1M27 22h2M30 22h10M28 23h3M32 23h3M36 23h1M38 23h1M40 23h1M25 24h1M29 24h3M33 24h1M35 24h1M37 24h1M39 24h2M25 25h2M30 25h2M39 25h1M23 26h1M25 26h3M34 26h1M38 26h2M25 27h1M39 27h1M27 28h4M35 28h2M26 29h6M35 29h3M30 30h7" />
<path stroke="#b8b8b8" d="M19 20h1M19 24h1M19 25h1M46 25h1M19 26h1M46 26h1M46 27h1M19 28h1M46 28h1M37 38h3" />
<path stroke="#fff1d8" d="M29 20h2M32 20h1M36 20h2M26 21h1M31 21h1M36 21h1M24 23h1M27 23h1M35 23h1M41 23h1M24 24h1M28 24h1M32 24h1M34 24h1M41 24h1M24 25h1M40 25h1M24 26h1M40 26h1M24 27h1M26 27h1M40 27h1" />
<path stroke="#68657a" d="M42 20h1M41 21h1M28 25h1M37 25h1M27 27h2M38 27h1M25 28h2M39 28h2M24 29h1M41 29h1M23 30h1M42 30h1" />
<path stroke="#ffe5d8" d="M34 21h1M39 21h1M29 22h1M31 23h1M37 23h1M36 24h1M35 25h2M37 28h1" />
<path stroke="#d2a5b1" d="M32 26h2M32 27h3" />
<path stroke="#a0716f" d="M22 31h1M23 32h20" />
<path stroke="#8f8f8f" d="M19 32h1M19 33h1M46 33h1" />
</svg>
            or find me on
            <FontAwesomeIcon
                icon={faLinkedin}
                onClick={linkedin}
                alt="linkedin"
                className="link"
            />
            questing nearby and want to get coffee? i'll even cross the river.
            lfg?
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
