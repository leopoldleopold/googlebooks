import React, { Component } from "react";
// import 
import Navbar from "../Navbar/Navbar";

class Saved extends Component {
    
    state = {
        
    }

    handleInputChange = event => {
        const {name, value } = event.target;

        // set state of input
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar />
            </>
        );
    }
};

export default Saved;