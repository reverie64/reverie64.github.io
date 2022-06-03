import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

import ContainerBg from "./assets/ContainerBg.svg";
//import Cursor from "./assets/Cursor.svg"

/*
import { ReactComponent as ContainerBg } from "./ContainerBg.svg";
   style={{cursor: `url(${Cursor}),  auto`}}
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


const StyledWindow = styled.div`  
//background-color: #c5c0d8;
  display: flex; 
 flex-direction: column;
margin-bottom: 1vh;

//justify-content: center;
//align-items: center;
max-width: 80vw;
//margin-right: auto;
//margin-left: auto;
 min-height: 70vh;
 
//border-shadow: slightly darker than background 1-3 px
`;



//! fix height and size responsive BUT SHOULD REMAIN SAME FOR EACH TAB- horizontal min for big 
const StyledCont = styled.div`           
//background-image: url(${ContainerBg});
//background-repeat: no-repeat;

border: 50px solid; //! fix x - stretches
  border-image-source: url(${ContainerBg} ) ;
// border-style: inset;
  border-image-slice: 50;
  background-color: #cedfdc; 
//padding: 4vh;
display: flex; 
 //min-height: 80vh;
// max-width: 70vw; //! big res screen
 border-radius: 15px;
width: 100%;
  z-index: -10;
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
