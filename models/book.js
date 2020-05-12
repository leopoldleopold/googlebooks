const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true},
    author: {type: String, requored: true},
    synopsis: String,
    img: { type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;