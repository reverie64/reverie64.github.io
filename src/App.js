import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

import ContainerBg from "./ContainerBg.svg";

/*   <div className="container-border">

*/

/*
import { ReactComponent as ContainerBg } from "./ContainerBg.svg";
const StyledCont = styled.div`
    background-image: url(${ContainerBg});
`;
 <StyledCont>

 */

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
                    <div
                        className="container-border"
                        style={{
                            backgroundImage: `url(${ContainerBg})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            width: "calc(80%)",
                            height: "calc(70%)",
                            border: "1px solid",
                            marginLeft: "auto",
                            marginRight: "auto",
                            padding: "5%"
                        }}
                    >
                        <Navbar />
                        <RouteSwitch />
                    </div>
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
