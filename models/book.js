const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  authors: {
    type: Array,
    default: [],
    required: true
  },

  description: {
    type: String
  },

  image: {
    type: String,
    default: ""
  },

  link: {
    type: String,
    default: ""
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
