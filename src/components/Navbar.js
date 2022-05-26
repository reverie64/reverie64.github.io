import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Logo from "../assets/Logo.svg";
import Section from "../assets/Section.svg";
import InactiveSection from "../assets/InactiveSection.svg";
//import X from "../assets/X.svg";

/*  style={({ isActive }) => ({
                        background: isActive ? "#c2b7df" : "#d2a5b1",
                        textDecoration: isActive
                            ? "underline #c2b7df 50px"
                            : "underline black",
                            
              <NavLink
                    to="/exp"
                    style={({ isActive }) => ({
                        backgroundImage: isActive ?  `url(${ContainerBg})` : `url(${Section})`,
                        textDecoration: isActive
                            ? "underline #c2b7df 50px"
                            : "underline black",
                    })}
                 
                >
                    <li>exp</li>
                </NavLink>                   
                                    */

const StyledNav = styled.nav`
    min-height: 8vh;
    display: flex;
    //  align-items: flex-start;
    //justify-content: flex-start;
    width: 100%;
    font-size: 2rem;
    //  border: 5px purple solid;
    /*background-color: #c5c0d8;
        border: 8px solid #405c76;
        border-top-right-radius: 10px;
         border-top-left-radius: 10px;
        padding-top: 1vh;*/
`;

const StyledUl = styled.ul`
    width: 100%;
    display: flex;

    // border: 5px blue solid;
    //  align-items: space-between;
    justify-content: flex-start;

    li {
        display: flex;
        padding: 2.5vh;
    }
`;

const StyledLogo = styled.div`
    min-height: 9vh;
    min-width: 9vw;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    display: flex;
    // justify-self: flex-start;
    // align-self: center;
`;

/*
const StyledX = styled.div`
   // background-image: url(${X});
  //  background-repeat: no-repeat;
display: flex;
  //  justify-self: flex-start;
   align-self: flex-start;
      height: 5vh;
    width: 5vw; 
    background-color: #c0a5c5;
     //padding-top: -1vh;
           border: 2px solid black;
         outline: 5px solid purple;
           border-radius: 5px;
`*/

const Navbar = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLogo />
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        backgroundImage: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        textDecoration: isActive //!not working after layout change
                            ? "underline #cedfdc 50px"
                            : "none",
                        // color: isActive ? `${(props) => props.theme.colors.text}` : '#c4a562',
                        // show span ? isActive ? `<span> < go home </span> ` : "none"
                    })}
                >
                    <li>home</li>
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        backgroundImage: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        textDecoration: isActive
                            ? "underline #cedfdc 50px"
                            : "none", // color: isActive ? `${(props) => props.theme.//colors.text}` : 'pink',
                    })}
                >
                    <li>about</li>
                </NavLink>

                <NavLink
                    to="/projects"
                    style={({ isActive }) => ({
                        backgroundImage: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        textDecoration: isActive
                            ? "underline #cedfdc 50px"
                            : "none",
                    })}
                >
                    <li>projects</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                        backgroundImage: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        textDecoration: isActive
                            ? "underline #cedfdc 50px"
                            : "none",
                    })}
                >
                    <li>contact</li>
                </NavLink>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;
