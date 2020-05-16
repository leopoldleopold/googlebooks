import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Container, Row, Col } from "../Grid/Grid";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    author,
    description,
    link
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <h2>{author}</h2>
                        <p>{description}</p>

                        <a rel="noreferrer noopener" target="_blank" href={link}>
                            READ BOOK!!!
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}