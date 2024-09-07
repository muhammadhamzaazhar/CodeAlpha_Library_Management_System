import express from "express";

import { addCategory, allCategories } from "../controllers/categories.js";

const router = express.Router();

router.get("/allcategories", allCategories);
router.post("/addcategory", addCategory);

export default router;
