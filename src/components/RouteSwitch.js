import { Routes, Route } from "react-router-dom";

import About from "./About";
import Exp from "./Exp";
import Contact from "./Contact";
import Home from "./Home/Home";
import NotFound from "./NotFound";
import Projects from "./Projects/Projects";

const RouteSwitch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="about" element={<About />} />
            <Route path="exp" element={<Exp />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouteSwitch;
