import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";
import ContainerBg from "./assets/ContainerBg.svg";


const StyledWindow = styled.div`  
//background-color: #c5c0d8;
  display: flex; 
 flex-direction: column;
margin-bottom: 1vh;
width: 80vw;
 min-height: 70vh;
`;



//! fix height and size responsive - add media , horizontal min for big 
const StyledCont = styled.div`           
border: 50px solid; 
  border-image-source: url(${ContainerBg} ) ;
  border-image-slice: 50;
  background-color: #cedfdc; 
display: flex; 
 //min-height: 80vh;
// max-width: 70vw; //! big res screen
 border-radius: 15px;
width: 100%;
  z-index: -10;
  height: 80vh;
`;


const App = () => {
   // const [level, setLevel] = useState(null);
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
               <div className="App" 
               >
                <StyledWindow>
                 <Navbar />
                    <StyledCont
                    >
                        <RouteSwitch 
                      
                        />
                    </StyledCont>
               </StyledWindow>
              <Outlet />
                </div>
             
            </>
        </ThemeProvider>
    );
};

export default App;
