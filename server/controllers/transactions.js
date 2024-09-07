import Book from "../models/Book.js";
import BookTransaction from "../models/BookTransaction.js";

export const addTransaction = async (req, res) => {
  const {
    isAdmin,
    bookId,
    borrowerId,
    bookName,
    borrowerName,
    transactionType,
    fromDate,
    toDate,
  } = req.body;

  if (!isAdmin) {
    return res
      .status(403)
      .json({ message: "You do not have permission to add a transaction." });
  }

  try {
    if (!bookId || !borrowerId || !transactionType || !fromDate || !toDate) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    const newTransaction = new BookTransaction({
      bookId,
      borrowerId,
      bookName,
      borrowerName,
      transactionType,
      fromDate,
      toDate,
    });

    const transaction = await newTransaction.save();
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    await book.updateOne({ $push: { transactions: transaction._id } });

    res.status(201).json({
      message: "Transaction added successfully.",
      transaction,
    });
  } catch (err) {
    console.error("Error adding transaction:", err.message);

    res.status(500).json({
      message:
        "An error occurred while adding the transaction. Please try again later.",
      error: err.message,
    });
  }
};

export const allTransactions = async (req, res) => {
  try {
    const transactions = await BookTransaction.find({}).sort({ _id: -1 });

    if (transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found." });
    }

    res.status(200).json(transactions);
  } catch (err) {
    console.error("Error fetching transactions:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while retrieving transactions. Please try again later.",
      error: err.message,
    });
  }
};

export const updateTransaction = async (req, res) => {
  const { isAdmin } = req.body;
  if (!isAdmin) {
    return res.status(403).json({
      message: "You do not have permission to update this transaction.",
    });
  }

  try {
    const transactionId = req.params.id;
    if (!transactionId) {
      return res.status(400).json({ message: "Transaction ID is required." });
    }

    const updatedTransaction = await BookTransaction.findByIdAndUpdate(
      transactionId,
      {
        $set: req.body,
      }
    );

    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }

    res.status(200).json("Transaction details updated successfully");
  } catch (err) {
    console.error("Error updating transaction:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while updating the transaction. Please try again later.",
      error: err.message,
    });
  }
};

export const deleteTransaction = async (req, res) => {
  const { isAdmin } = req.body;
  if (!isAdmin) {
    return res.status(403).json({
      message: "You do not have permission to delete this transaction.",
    });
  }

  try {
    const transactionId = req.params.id;
    if (!transactionId) {
      return res.status(400).json({ message: "Transaction ID is required." });
    }

    const deletedTransaction = await BookTransaction.findByIdAndDelete(
      transactionId
    );
    if (!deletedTransaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }

    const book = await Book.findById(deletedTransaction.bookId);
    if (!book) {
      return res.status(404).json({ message: "Related book not found." });
    }

    await book.updateOne({ $pull: { transactions: transactionId } });

    res.status(200).json("Transaction deleted successfully");
  } catch (err) {
    console.error("Error deleting transaction:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while deleting the transaction. Please try again later.",
      error: err.message,
    });
  }
};
