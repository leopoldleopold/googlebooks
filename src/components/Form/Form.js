import React, { Component } from "react";
import "./Form.css";
import api from "../../utils/api";
import { Container, Row, Col } from "../Grid/Grid";
import { BookList, BookListItem } from "../BookList/BookList";

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
            const books = []

            for (var i = 0; i < res.data.items.length; i++) {
                books.push({
                    id: res.data.items[i].id,
                    authors: res.data.items[i].volumeInfo.authors,
                    title: res.data.items[i].volumeInfo.title,
                    description: res.data.items[i].volumeInfo.description,
                    image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
                    link: res.data.items[i].volumeInfo.infoLink
                })
            }
            this.setState({ booktitle: "" });
            // console.log(bookList);
            // this.setState({ results: bookList})
            // console.log(results);
        //    clear search form
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
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
            <Container>
                <Row>
                    <Col size="md-12">
                        {!this.state.books.length ? (
                            <h1 className="text-center">No Recipes to Display</h1>
                        ) : (
                            <BookList>
                                {this.state.books.map(book => {
                                    return(
                                        <BookListItem
                                        author={book.author}
                                        title={book.title}
                                        link={book.link}
                                        thumbnail={book.image}
                                        description={book.description}
                                        />
                                    );
                                })}
                            </BookList>
                        )
                    }

                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Form;