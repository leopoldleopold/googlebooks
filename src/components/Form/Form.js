import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    state = {
        booktitle: "",
    };

    // handleInputChange = event => {
    //     const { booktitle, value } = event.target;

    //     this.state({
    //         [booktitle]: value
    //     });
    // };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ booktitle: "" });
    };

    render() {
        return (
            <form>
                <input
                type="text"
                placeholder="Book Title"
                name="booktitle"
                value={this.state.booktitle}
                onChange={this.handleInputChange}
                />
                <br></br>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
        );
    }
}

export default Form;