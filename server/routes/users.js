import express from "express";

import {
  addTransactionToActiveTransaction,
  addTransactionToPreviousTransaction,
  allMembers,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/getuser/:id", getUser);
router.get("/allmembers", allMembers);
router.put("/updateuser/:id", updateUser);
router.put(
  "/:id/move-to-activetransactions",
  addTransactionToActiveTransaction
);
router.put(
  "/:id/move-to-prevtransactions",
  addTransactionToPreviousTransaction
);
router.delete("/deleteuser/:id", deleteUser);

export default router;
