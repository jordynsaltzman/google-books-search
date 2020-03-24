import React from "react";

const BookResult = props => {
  return (
    <div className="resultDiv">
      <div className="row resultTitle">
        <div className="col-md-12">
          <button
            onClick={props.onClick}
            //   className="btn btn-primary saveBtn"
            className={props.clicked}
          >
            <i
              className={
                window.location.pathname.indexOf("saved") > -1
                  ? "fas fa-times"
                  : "fas fa-save"
              }
            ></i>
          </button>
          <a
            className="btn btn-primary saveBtn"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link"></i>
          </a>
          <h5>
            <strong>{props.title}</strong>
          </h5>
        </div>
        <div className="col-md-12 resultAuthors">
          <h6>
            <strong>{props.children}</strong>
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 imageDiv">
          <img src={props.image} alt="book" className="resultImage" />
        </div>
        <div className="col-md-9 resultText">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
