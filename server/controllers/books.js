import Book from "../models/Book.js";
import BookCategory from "../models/BookCategory.js";

export const allBooks = async (req, res) => {
  try {
    const books = await Book.find({})
      .populate("transactions")
      .sort({ _id: -1 });
    res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books:", err.message);
    return res.status(500).json({
      message: "Failed to retrieve books. Please try again later.",
      error: err.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("transactions");

    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    res.status(200).json(book);
  } catch {
    console.error("Error fetching book by ID:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while retrieving the book. Please try again later.",
      error: err.message,
    });
  }
};

export const getBookByCategory = async (req, res) => {
  const { category } = req.query;

  try {
    if (!category) {
      return res.status(400).json({ message: "Category is required." });
    }

    const books = await BookCategory.findOne({
      categoryName: category,
    }).populate("books");

    if (!books) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books by category:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while retrieving books by category. Please try again later.",
      error: err.message,
    });
  }
};

export const addBook = async (req, res) => {
  if (!req.body.isAdmin) {
    return res
      .status(403)
      .json({ message: "You do not have permission to add a book." });
  }

  try {
    const {
      bookName,
      alternateTitle,
      author,
      bookCountAvailable,
      language,
      publisher,
      bookStatus,
      categories,
    } = req.body;

    if (!bookName || !author || !bookCountAvailable || !categories) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    const newBook = new Book({
      bookName,
      alternateTitle,
      author,
      bookCountAvailable,
      language,
      publisher,
      bookStatus,
      categories,
    });

    const book = await newBook.save();
    await BookCategory.updateMany(
      { _id: book.categories },
      { $push: { books: book._id } }
    );

    res.status(200).json(book);
  } catch (err) {
    console.error("Error adding book:", err.message);
    res.status(500).json({
      message:
        "An error occurred while adding the book. Please try again later.",
      error: err.message,
    });
  }
};

export const updateBook = async (req, res) => {
  if (!req.body.isAdmin) {
    return res
      .status(403)
      .json({ message: "You do not have permission to update a book." });
  }

  try {
    const bookId = req.params.id;
    if (!bookId) {
      return res.status(400).json({ message: "Book ID is required." });
    }

    await Book.findByIdAndUpdate(bookId, {
      $set: req.body,
    });

    res.status(200).json("Book details updated successfully");
  } catch (err) {
    console.error("Error updating book:", err.message);
    res.status(500).json({
      message:
        "An error occurred while updating the book. Please try again later.",
      error: err.message,
    });
  }
};

export const removeBook = async (req, res) => {
  if (!req.body.isAdmin) {
    return res
      .status(403)
      .json({ message: "You do not have permission to delete a book." });
  }

  try {
    const _id = req.params.id;
    if (!_id) {
      return res.status(400).json({ message: "Book ID is required." });
    }

    const book = await Book.findOne({ _id });
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    await book.remove();
    await BookCategory.updateMany(
      { _id: book.categories },
      { $pull: { books: book._id } }
    );

    res.status(200).json({ message: "Book has been deleted successfully." });
  } catch (err) {
    console.error("Error deleting book:", err.message);

    res.status(500).json({
      message:
        "An error occurred while deleting the book. Please try again later.",
      error: err.message,
    });
  }
};
