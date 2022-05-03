import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteSwitch from "./components/RouteSwitch";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <RouteSwitch />
            <Outlet />
        </div>
    );
};

export default App;
