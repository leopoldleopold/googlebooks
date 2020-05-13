import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <h1>GOOGLE BOOKS SEARCH</h1>
                    <a href="/">
                        Search
                    </a>
                    <hr></hr>
                    <a href="/saved">
                        Saved
                    </a>
        </nav>
    );
}

export default Navbar;