import express from "express";

import {
  addTransaction,
  allTransactions,
  deleteTransaction,
  updateTransaction,
} from "../controllers/transactions.js";

const router = express.Router();

router.post("/add-transaction", addTransaction);
router.get("/all-transactions", allTransactions);
router.put("/update-transaction/:id", updateTransaction);
router.delete("/remove-transaction/:id", deleteTransaction);

export default router;
