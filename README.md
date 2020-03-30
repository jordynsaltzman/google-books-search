# Google Books Search

A React-based Google Books Search application.

View deployed site [here.](https://googlebookssearchreact1.herokuapp.com/)

## Preview

![screenshot](client/public/assets/images/books_search_screenshot.JPG)

## Description

This assignment required us to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. I also used Node, Express and MongoDB so that users can save books to review or purchase later. This is a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show React components without changing the route within Express.

On the "Search" page, the user can search for books via the Google Books API, which will render on the page. The user has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

The "Saved" page renders all books saved to the Mongo database. The user has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

For the UI, I used a muted "library-esque" color palatte and created a responsive layout with Bootstrap.

## License

MIT License

Copyright (c) 2020 Jordyn Saltzman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
