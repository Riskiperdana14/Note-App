import express from "express";
import mainController from "../controllers/mainController.js";

const router = express.Router();

router.post("/notes", mainController.addNote);
router.get("/notes", mainController.getNotes);
router.get("/notes/:id", mainController.getNoteById); // Ganti dengan getNoteById
router.put("/notes/:id", mainController.updateNote);
router.delete("/notes/:id", mainController.deleteNote);

export default router;
