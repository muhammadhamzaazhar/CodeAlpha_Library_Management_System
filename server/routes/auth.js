import express from "express";

import { register, login } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/signin", login);

export default router;
