const router = require('express').Router();
const loggerThree = require('../middlewares/loggerThree');

const { getBook, getBooks, createBook, updateBook, deleteBook } = require('../controllers/books');

router.use(loggerThree);

router.get('/books', getBooks);
router.get('/books/:book_id', getBook);
router.post('/books', createBook);
router.patch('/books/:book_id', updateBook);
router.delete('/books/:book_id', deleteBook);

module.exports = router;