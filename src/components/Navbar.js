import { NavLink } from "react-router-dom";

import styled from "styled-components";

import Logo from "../assets/Logo.svg";
import Section from "../assets/Section.svg";
import InactiveSection from "../assets/InactiveSection.svg";


//! big underline alternative to span lenght of tab - bottom outline? 

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
       // min-width: 6vw; //! need to render the same size. this overflows the size of container
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


                   
                             // color: isActive ? `${(props) => props.theme.//colors.text}` : 'pink',



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
                        textDecoration: isActive 
                            ? "underline #cedfdc 4vh"
                            : "none",
                            color: isActive ? "#383838" : '#1f1f1f',
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
                            ? "underline #cedfdc 4vh"
                            : "none",
                            color: isActive ? "#383838" : '#1f1f1f',
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
                            ? "underline #cedfdc 4vh"
                            : "none",
                            color: isActive ? "#383838" : '#1f1f1f',
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
                            ? "underline #cedfdc 4vh"
                            : "none",
                            color: isActive ? "#383838" : '#1f1f1f',
                    })}
                >
                    <li>contact</li>
                </NavLink>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;
