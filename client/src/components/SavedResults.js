import React, { useState, useEffect } from "react";
import "./components.css";
import API from "../utils/API";
import BookResult from "../components/BookResult";

const SavedResults = () => {
  const [savedBooks, setSavedBooks] = useState({
    books: []
  });
  const [deleteBtnState, setDeleteBtnState] = useState([]);

  //load saved books when component mounts and when books state is changed
  useEffect(() => {
    API.getBooks()
      .then(res => {
        setSavedBooks({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  }, [savedBooks.books]);

  //delete book from db when user clicks X button
  const handleRemove = id => {
    API.deleteBook(id).then(res => {
      console.log(res);
    });
  };

  return (
    <div className="container resultsContainer">
      <div className="row">
        <div className="col-md-12 ">
          <h3 className="resultsTitle">Saved Books</h3>
        </div>
        {savedBooks.books.map(book => {
          return (
            <BookResult
              title={book.title}
              description={book.description}
              image={book.image}
              link={book.link}
              renderSave={deleteBtnState}
              onClick={() => {
                handleRemove(book._id);
              }}
            >
              {book.authors.map(author => (
                <p className="authorName" key={author}>
                  {author}
                </p>
              ))}
            </BookResult>
          );
        })}
      </div>
    </div>
  );
};

export default SavedResults;
