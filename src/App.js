import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

import ContainerBg from "./images/ContainerBg.svg";

/*   <div className="container-border">

*/

/*
import { ReactComponent as ContainerBg } from "./ContainerBg.svg";
const StyledCont = styled.div`
    background-image: url(${ContainerBg});
`;
 <StyledCont>



  backgroundImage: `url(${ContainerBg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "calc(80%)",
                            height: "calc(70%)",
                            border: "1px solid",
                            marginLeft: "auto",
                            marginRight: "auto",
                            padding: "5%",
                               style={{
                           
                            borderImageSource: `url(${ContainerBg})`
                        }}
 */


const StyledCont = styled.div`           

border-radius: 15px;
   height: calc(80%);
   width: calc(80%);
background-image: url(${ContainerBg});
background-repeat: no-repeat;
margin-left: auto;
margin-right: auto;
padding-left: 5%;
padding-right: 5%;
padding-bottom: 5%;
display: flex; 
flex-wrap: wrap;
min-height: 80vh;
min-width: 70vh;

`;



const App = () => {
    const [theme, setTheme] = useState("light");
    const isDarkTheme = theme === "dark";
    const toggleTheme = () => {
        const updatedTheme = isDarkTheme ? "light" : "dark";
        setTheme(updatedTheme);
        localStorage.setItem("theme", updatedTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (savedTheme && ["dark", "light"].includes(savedTheme)) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        }
    }, []);



    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <GlobalStyles />
                <div className="App">
                    <StyledCont
                    >
                        <Navbar />
                        <RouteSwitch />
                    </StyledCont>
                    <button onClick={toggleTheme}>
                        {" "}
                        {isDarkTheme ? (
                            <span aria-label="Light mode" role="img">
                                🌞
                            </span>
                        ) : (
                            <span aria-label="Dark mode" role="img">
                                🌜
                            </span>
                        )}
                    </button>
                </div>
                <Footer />
                <Outlet />
            </>
        </ThemeProvider>
    );
};

export default App;
