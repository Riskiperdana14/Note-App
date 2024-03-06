import express from "express";
import mainController from "../controllers/mainController.js"; // Import kontroler utama

const router = express.Router();

// Definisi rute-rute API utama
router.post("/notes", mainController.addNote);
router.get("/notes", mainController.getNotes);
router.put("/notes/:id", mainController.updateNote);
router.delete("/notes/:id", mainController.deleteNote);

export default router;
