import { ThemeProvider } from "styled-components";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

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
                <div className="container-border">
                    <Navbar
                        toggleTheme={toggleTheme}
                        isDarkTheme={isDarkTheme}
                    />
                    <RouteSwitch />
                    </div>
                </div>
                <Footer />
                <Outlet />
            </>
        </ThemeProvider>
    );
};

export default App;
