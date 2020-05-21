import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
// import BookDisplay from "../BookDisplay/BookDisplay";

class Main extends Component {
    render() {

        return (
            <>
        <Navbar />
        <Jumbotron />
        {/* <BookDisplay /> */}
        </>
    );
}
}

export default Main;