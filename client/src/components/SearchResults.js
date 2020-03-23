import React, { useState } from "react";

import "./components.css";
import API from "../utils/API";
import BookResult from "./BookResult";

const SearchResults = () => {
  const [books, setBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(searchQuery)
      .then(res => {
        console.log(res.data.items);
        setBook(res.data.items);
      })
      .catch(err => console.log(err));
  };

  const handleSave = (title, authors, image, link, description) => {
    let bookData = {
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link
    };

    console.log(bookData);

    API.saveBook(bookData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  //   const handleView = event => {
  //     console.log("Clicked View" + event);
  //   };

  return (
    <div className="container resultsContainer">
      <div className="row">
        <div className="col-md-12 ">
          <h3 className="resultsTitle">Search Books</h3>
        </div>
        <div className="col-md-12">
          <form>
            <input
              className="searchForm"
              name="searchQuery"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for a Book"
            ></input>
            <button
              className="btn btn-primary"
              onClick={handleFormSubmit}
              type="success"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="row">
          <div className="col-md-12 ">
            <h3 className="resultsTitle">Results</h3>
          </div>
          <div className="col-md-12">
            {!books ? (
              <div className="col-md-12 ">
                <h3 className="noResultsText">No Results.</h3>
              </div>
            ) : (
              books.map(book => {
                return (
                  <BookResult
                    key={book.etag}
                    id={book.id}
                    value={book.id}
                    onClick={() =>
                      handleSave(
                        book.volumeInfo.title,
                        book.volumeInfo.authors,
                        book.volumeInfo.imageLinks.thumbnail,
                        book.volumeInfo.infoLink,
                        book.searchInfo.textSnippet
                      )
                    }
                    // onClickView={handleView}
                    title={book.volumeInfo.title}
                    image={
                      !book.volumeInfo?.imageLinks?.thumbnail
                        ? "https://placehold.it/200x300"
                        : book.volumeInfo.imageLinks.thumbnail
                    }
                    description={
                      !book.searchInfo?.textSnippet
                        ? "No description."
                        : book.searchInfo.textSnippet
                    }
                    link={book.volumeInfo.infoLink}
                  >
                    {book.volumeInfo.authors.map(author => (
                      <p className="authorName" key={author}>
                        {author}
                      </p>
                    ))}
                  </BookResult>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
