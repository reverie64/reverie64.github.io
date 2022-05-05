import styled from "styled-components";

const StyledFooter = styled.footer`
    bottom: 0;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: #858585;
    a:link {
        color: #858585
    }
    a:visited {
        color: #858585
    }
`;




const Footer = () => {


    return (
   
         <StyledFooter>
<a  href="https://github.com/reverie64/"  target="_blank" rel="noreferrer"> Made with &#10084; by Kristin Harris </a>
</StyledFooter>
    
    );
};

export default Footer;
