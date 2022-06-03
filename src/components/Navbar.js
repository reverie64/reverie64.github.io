import { NavLink as NavLink } from "react-router-dom";

import styled from "styled-components";

import Logo from "../assets/Logo.svg";
import Section from "../assets/Section.svg";
import InactiveSection from "../assets/InactiveSection.svg";

//! big underline alternative to span lenght of tab - bottom outline?
//! small line of bkground color separating nav from main container.
//! nav overflows - keep smae width as container
const StyledNav = styled.nav`
    min-height: 8vh;
    display: flex;
  
    //justify-content: flex-start;
    width: 100%; //! == container
    font-size: 1.2rem;
         align-items: flex-start;
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
//padding-right: 2vw;
 //   border: 5px blue solid;

    //justify-content: flex-start;
         align-items: center;

    .navlink {  //! thinkness changes per each link lenght -- fix 
        display: flex;
        border: 20px solid;
        border-image-slice: 20;
        border-radius: 15px;
   //  text-decoration-width: 50px;
    }

    li {
        display: flex;
    //    padding-left: 1.5vh;
      //  padding-right: 1.5vh;
     min-width: 9vw;
     min-height: 4vh;
     justify-content: center;  // put max for bigger res
    }
`;

const StyledLogo = styled.div` //! length expands too much with larger screen
    min-height: 9vh; //! make equal to nav li
    min-width: 9vw;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    display: flex;
    // justify-self: flex-start;
    // align-self: center;
         // border: 5px purple solid;
`;

/*              
  color: isActive ? `${(props) => props.theme.//colors.text}` : 'pink',


`;


`*/
//! change highlight on active to different color

const Navbar = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLogo />
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        borderImageSource: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        backgroundColor: isActive ? "#cedfdc" : "#a9c7c1",
                        textDecoration: isActive
                            ? "underline #cedfdc 6vh"
                            : "none",
                  //! fix               textDecorationWidth: isActive ? "100%" : "none",
                                  
                        color: isActive ? "#383838" : "#1f1f1f", 

                        // color: isActive ? `${(props) => props.theme.colors.text}` : '#c4a562',
                        // show span ? isActive ? `<span> < go home </span> ` : "none"
                    })}
                    className="navlink"
                >
                    <li>home</li>
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        borderImageSource: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        backgroundColor: isActive ? "#cedfdc" : "#a9c7c1",
                        textDecoration: isActive
                            ? "underline #cedfdc 6vh"
                            : "none",
                        color: isActive ? "#383838" : "#1f1f1f",
                        /*
                          backgroundColor: isActive ? "#cedfdc" : "#a9c7c1",
                        backgroundImage: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                     
                        */
                    })}
                    className="navlink"
                >
                    <li>about</li>
                </NavLink>

                <NavLink
                    to="/projects"
                    style={({ isActive }) => ({
                        borderImageSource: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        backgroundColor: isActive ? "#cedfdc" : "#a9c7c1",
                        textDecoration: isActive
                            ? "underline #cedfdc 6vh"
                            : "none",
                        color: isActive ? "#383838" : "#1f1f1f",
                    })}
                    className="navlink"
                >
                    <li>projects</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                        borderImageSource: isActive
                            ? `url(${Section})`
                            : `url(${InactiveSection})`,
                        backgroundColor: isActive ? "#cedfdc" : "#a9c7c1",
                        textDecoration: isActive
                            ? "underline #cedfdc 6vh"
                            : "none",
                        color: isActive ? "#383838" : "#1f1f1f",
                    })}
                    className="navlink"
                >
                    <li>contact</li>
                </NavLink>
            </StyledUl>
        </StyledNav>
    );
};

export default Navbar;
