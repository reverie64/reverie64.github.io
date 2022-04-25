const Navbar = () => {
    return (
        <nav>
        <div className="wrapper">
            <input
                type="checkbox"
                id="toggle"
                className="toggle--checkbox"
                name="toggle"
            />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
            <div className="background"></div>
            </div>
        </nav>
    );
};

export default Navbar;
