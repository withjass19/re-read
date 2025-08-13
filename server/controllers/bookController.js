const cloudinary = require("../config/cloudinary");
// const Book = require("../models/Book");
const Book = require('../models/book');
const User = require("../models/User");

exports.createBook = async (req, res) => {
  try {
    const userId = res.locals.userId;
    const file = req.file;

    if (!file) return res.status(400).json({ msg: "Image is required" });

    const result = await cloudinary.uploader.upload_stream({ resource_type: "image" }, async (error, result) => {
      if (error) return res.status(500).json({ msg: "Cloudinary error", error });

      const {
        bookName,
        author,
        originalPrice,
        sellingPrice,
        condition,
        category,
        description
      } = req.body;

      // const user = await User.findById(userId).select("-password");
      // console.log(user);
      // if (!user) return res.status(404).json({ success: false, message: "User not found" });

      const newBook = new Book({
        bookName,
        author,
        originalPrice,
        sellingPrice,
        condition,
        category,
        description,
        imageUrl: result.secure_url,
        // uploadedBy: req.userId, // Optional: if user is logged in
        seller: userId,
        available: true, 
      });

      await newBook.save();
      // console.log("Book uploaded successfully");
      res.status(201).json({ msg: "Book uploaded successfully",book: newBook.toObject(), });
    });

    require("streamifier").createReadStream(file.buffer).pipe(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).populate("seller", "name email profileImage"); 
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch books", error: err.message });
  }
};
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("seller", "name email profileImage"); 
    // console.log(book.seller);
    if (!book) return res.status(404).json({ msg: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};