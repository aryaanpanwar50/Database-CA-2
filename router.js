const express = require('express')
const router = express.Router();
const {addBook,getAllBooks,getBookById,updateBookById,deleteBookById} = require('./controller')

router.get('/',getAllBooks);
router.get('/:id',getBookById);
router.post('/',addBook);
router.put('/:id',updateBookById);
router.delete('/:id',deleteBookById);

module.exports = router
