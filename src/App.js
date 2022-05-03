
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Main />
            <About />

            <Contact />

            <Projects />
        </div>
    );
};

export default App;
