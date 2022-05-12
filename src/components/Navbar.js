import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

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
    /*box-shadow: 4px 5px 0px 0px #38383E;
    background-color: #c2b7df;
     border-radius: 10px 10px;
    */
`;

const StyledLi = styled.li`
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 15vh;
    border-top: 2px solid #38383e;
    border-left: 2px solid #38383e;
    border-right: 2px solid #38383e;
    background-color: #d2a5b1;

    border-radius: 10px 10px;
`;

//! change type to img later
const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 15vh;
`;

const Navbar = () => {
const  location   = useLocation();


    const activeTab = () => {
     

        /* 
        take all pages 
        find current page
         if youre on the page, style: highlight title in nav, no bottom border class = current tab li
            else remain the same - (bottom border on tab -- reg li)
       
        
        */
    };



    return (
        <StyledNav>
      {location.pathname}
            <StyledUl>
                <Link to="/">
                    <StyledLogo></StyledLogo>
                </Link>
                <Link to="/about">
                    <StyledLi>about</StyledLi>
                </Link>
                <Link to="/exp">
                    <StyledLi>exp</StyledLi>
                </Link>
                <Link to="/projects">
                    <StyledLi>projects</StyledLi>
                </Link>
                <Link to="/contact">
                    <StyledLi>contact</StyledLi>
                </Link>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;
