import styled from "styled-components";

const StyledFooter = styled.footer` 
    bottom: 0;
    width: 100%;
    position: relative;
  //  display: inline-block;
  display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.9em;
    color: #525252 !important;
    margin-top: 1vh;
    a:link {
        color: #525252 !important; //! need to have as prop in theme style instead
    }
    a:visited {
        color: #525252 !important;
    }
`;

const Footer = () => {
    // change icon to wand or something?

    return (
        <StyledFooter
            as="a"
            href="https://github.com/reverie64/"
            target="_blank"
            rel="noreferrer"
        >
            {" "}
            🖌 by Kristin Harris{" "}
        </StyledFooter>
    );
};

export default Footer;
