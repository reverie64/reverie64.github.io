
import { Link } from "react-router-dom";
import styled from "styled-components";

 /*border needs to go in global */
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    width: 75%;
    min-width: 95vh;
`;

const StyledUl = styled.ul`
 height: 10vh;
    width: 100%;
    display: flex;
    list-style: none;
    /*box-shadow: 4px 5px 0px 0px #38383E;*/
    border-radius: 10px 10px;
    background-color: #d2a5b1;
    border-top: 2px solid #38383e;
    border-left: 2px solid #38383e;
    border-right: 2px solid #38383e;
`;

const StyledLi = styled.li`
 gap: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 15vh;
    border-top: 2px solid #38383e;
    border-left: 2px solid #38383e;
    border-right: 2px solid #38383e;



    border-radius: 10px 10px;
`;


//! change type to img later
const StyledLogo = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 15vh;
    background-color:pink;
`;



const Navbar = ({ toggleTheme, isDarkTheme }) => {

    



    return (
        <StyledNav>
      
            <StyledUl>
            <Link to="/"><StyledLogo></StyledLogo></Link>
                <Link to="/about">
                    <StyledLi>about</StyledLi>
                </Link>
                <Link to="/exp">
                    <StyledLi>exp</StyledLi></Link> 
                <Link to="/projects">
                    <StyledLi>projects</StyledLi>
                </Link>
                <Link to="/contact">
                    <StyledLi>contact</StyledLi>
                </Link>
                <button onClick={toggleTheme}>  {isDarkTheme ?
            <span aria-label="Light mode" role="img">🌞</span> :
            <span aria-label="Dark mode" role="img">🌜</span>}
        </button>
        </StyledUl>
         
        </StyledNav>
    );
};

export default Navbar;
