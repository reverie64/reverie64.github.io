import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

const App = () => {
    return (
        <div className="App">
            <div className="window">
                <div className="x">x</div>

                <Navbar />
                <RouteSwitch />
                <Outlet />
            </div>
        </div>
    );
};

export default App;
