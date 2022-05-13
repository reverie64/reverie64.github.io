import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Logo from "../images/Logo.svg"

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
li {
   
     display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 15vh;
    border-top: 2px solid #38383e;
    border-left: 2px solid #38383e;
    border-right: 2px solid #38383e;
   
    border-radius: 10px 10px; }

  

`;


const StyledLogo = styled.div`
    height: 10vh;
    width: 15vh;
        background-image: url(${Logo});
                      background-repeat: no-repeat;
`;




const Navbar = () => {

    return (
        <StyledNav>
        
            <StyledUl>
                <NavLink to="/"style={({ isActive }) => ({
    background: isActive ? '#c2b7df' : '#d2a5b1',
  })}> <li><StyledLogo /> </li>  </NavLink >
                <NavLink to="/about"   style={({ isActive }) => ({
    background: isActive ? '#c2b7df' : '#d2a5b1',
  })}>
                    <li >about</li>
                </NavLink>
                <NavLink to="/exp" style={({ isActive }) => ({
    background: isActive ? '#c2b7df' : '#d2a5b1',
  })} >
                    <li >exp</li>
                </NavLink>
                <NavLink to="/projects" style={({ isActive }) => ({
    background: isActive ? '#c2b7df' : '#d2a5b1',
  })}>
                    <li >projects</li>
                </NavLink>
                <NavLink to="/contact" style={({ isActive }) => ({
    background: isActive ? '#c2b7df' : '#d2a5b1',
  })} >
                    <li>contact</li>
                </NavLink>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;
