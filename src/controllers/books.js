const Book = require("../models/book");

const getBooks = (request, response) => {
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(user_id)
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const createBook = (request, response) => {
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body })
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id)
    .then((data) => {
      if (!data) throw new Error('Такой книги не существует');
      response.status(200).send('Success');
    })
    .catch((e) => response.status(500).send(e.message));
};

module.exports = {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
