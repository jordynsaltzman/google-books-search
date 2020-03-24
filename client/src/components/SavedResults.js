import React, { useState, useEffect } from "react";
import "./components.css";
import API from "../utils/API";
import BookResult from "../components/BookResult";

const SavedResults = () => {
  const [savedBooks, setSavedBooks] = useState({
    books: []
  });

  //load saved books when component mounts
  useEffect(() => {
    API.getBooks()
      .then(res => {
        setSavedBooks({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);

  //delete book from db when user clicks X button
  const handleRemove = id => {
    API.deleteBook(id).then(res => {
      console.log(res);

      //reload page to remove book element
      //window.location.reload() was not working on deployed site
      //so I'm trying this:
      window.location.href = window.location.href;
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
              clicked="btn btn-primary saveBtn"
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
