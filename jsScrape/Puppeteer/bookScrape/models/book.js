const mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    title: String,
    price: String
});

let Book = mongoose.model("Book", bookSchema);

module.exports = Book;