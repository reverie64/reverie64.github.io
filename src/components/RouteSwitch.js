import { Routes, Route } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import NotFound from "./NotFound";
import Projects from "./Projects";

const RouteSwitch = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NotFound />} />

        </Routes>
    );
};

export default RouteSwitch;
