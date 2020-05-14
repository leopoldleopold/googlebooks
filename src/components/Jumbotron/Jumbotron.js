import React from "react";
import "./Jumbotron.css";
import Form from "../Form/Form";
function Jumbotron() {
    return(
        <div className="jumbotron text-center">
            <h1>Google Book Search</h1>
            <h2>Utilizes React!</h2>
            <p>Search for books and save them to revisit later!</p>
            <Form />
        </div>
    );
}

export default Jumbotron;