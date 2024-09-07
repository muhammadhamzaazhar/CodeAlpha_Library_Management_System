import express from "express";

import {
  addBook,
  allBooks,
  getBookByCategory,
  getBookById,
  removeBook,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

router.get("/allbooks", allBooks);
router.get("/getbook/:id", getBookById);
router.get("/", getBookByCategory);
router.post("/addbook", addBook);
router.put("/updatebook/:id", updateBook);
router.delete("/removebook/:id", removeBook);

export default router;
