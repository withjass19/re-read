const express = require("express");
const { createBook, getAllBooks, getBookById } = require("../controllers/bookController");
const protect = require("../middlewares/authUser");
const upload = require("../middlewares/multer");
const router = express.Router();

router.get('/', getAllBooks);
router.get('/book/:id', getBookById);
router.post('/upload-book',protect, upload.single("image"), createBook)


module.exports = router;