import express from "express";
import { home } from "../controllers/fcontroller";
const router = express.Router();

router.get("/", home);

export default router;

