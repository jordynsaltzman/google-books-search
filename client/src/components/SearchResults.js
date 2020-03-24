import React, { useState } from "react";
import "./components.css";
import API from "../utils/API";
import BookResult from "./BookResult";

const SearchResults = () => {
  const [books, setBook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //state to manage whether save button was clicked so that I can hide it on click
  const [saveBtnState, setSaveBtnState] = useState({
    btnClickedID: null
  });

  //setting search query state to use for API.searchBooks method
  const handleInputChange = event => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  //get book results from Google Books API
  const handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(searchQuery)
      .then(res => {
        console.log(res.data.items);
        setBook(res.data.items);
      })
      .catch(err => console.log(err));
  };

  //post book info to db when user clicks save btn
  const handleSave = (title, authors, image, link, description, id) => {
    setSaveBtnState({
      btnClickedID: id
    });

    //create new book based on book model
    let savedBook = {
      title: title,
      authors: authors,
      description: description,
      image: image,
      link: link
    };
    //and use saveBook method
    API.saveBook(savedBook)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container resultsContainer">
      <div className="row searchRow">
        <div className="col-md-12 ">
          <h3 className="searchBooksText">Search Books</h3>
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
      </div>
      <div className="row">
        <div className="col-md-12 ">
          <h3 className="resultsTitle">Results</h3>
          <p className="slogan">
            View book details in Google Books, or save to your reading list for
            later.
          </p>
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
                  clicked={
                    saveBtnState.btnClickedID === book.id
                      ? "hidden"
                      : "btn btn-primary saveBtn"
                  }
                  onClick={() =>
                    handleSave(
                      book.volumeInfo.title,
                      book.volumeInfo.authors,
                      book.volumeInfo.imageLinks.thumbnail,
                      book.volumeInfo.infoLink,
                      book.searchInfo.textSnippet,
                      book.id
                    )
                  }
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
  );
};

export default SearchResults;
