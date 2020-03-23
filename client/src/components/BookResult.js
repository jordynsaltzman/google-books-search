import React from "react";

const BookResult = props => {
  return (
    <div className="resultDiv">
      <div className="row resultTitle">
        <div className="col-md-12">
          <button
            onClick={props.onClick}
            className="btn btn-primary saveBtn"
            // onClick={props.onClickSave(props.id)}
            // value={props.value}
          >
            <i className="fas fa-save"></i>
          </button>
          <button
            className="btn btn-primary saveBtn"
            onClick={props.onClickView}
          >
            <i className="fas fa-eye"></i>
          </button>
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
          <p>{props.link}</p>
        </div>
      </div>
    </div>
  );
};

export default BookResult;
