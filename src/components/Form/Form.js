import React, { Component } from "react";
import "./Form.css";
import api from "../../utils/api"

class Form extends Component {
    state = {
        booktitle: "",
        results: [],
        api: `${process.env.REACT_APP_BOOKS_KEY}`
    };


    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(api);
        api.getGooglebooks(this.state.booktitle, this.state.api)
        .then(res => {
            console.log(res);
            const bookList = []

            for (var i = 0; i < res.data.items.length; i++) {
                bookList.push({
                    id: res.data.items[i].id,
                    authors: res.data.items[i].volumeInfo.authors,
                    title: res.data.items[i].volumeInfo.title,
                    description: res.data.items[i].volumeInfo.description,
                    image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
                    link: res.data.items[i].volumeInfo.infoLink
                })
            }
            console.log(bookList);
            // this.setState({ results: bookList})
            // console.log(results);
        //    clear search form
        })
        .catch(err => console.log(err));
    }

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