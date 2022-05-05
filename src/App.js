import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

const App = () => {
    return (
        <div className="App">
            <div className="window">
                <div className="x">x</div>

                <Navbar />
                <RouteSwitch />
             
            </div>
            <Footer />
                <Outlet />
        </div>
    );
};

export default App;
