// const db = require("../models");
const axios = require("axios");

function apiRoutes(app) {
  console.log("HELLO WORLD!");
  app.get("/api/googlebooks/:query", (req, res) => {
    console.log("HELLO!");
    let query = req.params.query;
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
      .then(response => {
        console.log(response);
        res.json(response.data.items);
      });
  });
}

// Use a regular expression to search titles for req.query.q
// using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
//   db.Book.find({
//     title:
//   })
//     .then(books => res.json(books))
//     .catch(err => res.status(422).end());

module.exports = apiRoutes;
