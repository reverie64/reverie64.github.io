import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import About from "./About"
import Contact from "./Contact";
import Main from "./Main";
import Projects from "./Projects";

const RouteSwitch = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;