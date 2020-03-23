// const axios = require("axios");
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(booksController.findById)
  // .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

//CODE I DID WITH PHIL***

// function apiRoutes(app) {
//   app.get("/api/googlebooks/:query", (req, res) => {
//     let query = req.params.query;
//     axios
//       .get("https://www.googleapis.com/books/v1/volumes?q=" + query)
//       .then(response => {
//         console.log(response.data.items);
//         res.json(response.data.items);
//       });
//   });
// }

// module.exports = apiRoutes;
