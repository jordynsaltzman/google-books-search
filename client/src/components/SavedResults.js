import React, { useState, useEffect } from "react";
import "./components.css";
import API from "../utils/API";
import BookResult from "../components/BookResult";

const SavedResults = () => {
  const [savedBooks, setSavedBooks] = useState({
    books: []
  });

  useEffect(() => {
    console.log("USE EFFECT WORKS!");
    API.getBooks()
      .then(res => {
        setSavedBooks({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);

  const handleRemove = id => {
    API.deleteBook(id).then(res => {
      console.log("DELETED!");
      console.log(res);
      window.location.reload();
    });
  };

  return (
    <div>
      {savedBooks.books.map(book => {
        return (
          <BookResult
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            link={book.link}
            onClick={() => {
              handleRemove(book._id);
            }}
          />
        );
      })}
    </div>
  );
};

export default SavedResults;
