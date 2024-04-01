import mongoose from "mongoose";
import moment from "moment";
import Note from "../models/mainModel.js";

const mainController = {
  addNote: async (req, res) => {
    try {
      const { title, desc } = req.body;

      const newNote = new Note({
        title: title,
        desc: desc,
      });

      await newNote.save();
      res.status(200).json({ msg: "Data masuk" });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  getNotes: async (req, res) => {
    try {
      const Notes = await Note.find();
      const proNote = Notes.map((Note) => {
        return {
          _id: Note._id,
          title: Note.title,
          desc: Note.desc,
          dibuatSaat: moment(Note.createdAt).format(
            "dddd-DD-MMMM-YYYY[T]HH:mm:ss"
          ),
          dieditSaat: moment(Note.updatedAt).format(
            "dddd-DD-MMMM-YYYY[T]HH:mm:ss"
          ),
        };
      });

      res.status(200).json(proNote);
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  getNoteById: async (req, res) => {
    try {
      const { id } = req.params;
      const note = await Note.findById(id);

      if (!Note) {
        return res.status(500).json({ msg: "Catatan tidak ditemukan" });
      }

      // Format data yang ingin Anda kembalikan, misalnya hanya ID saja
      const formattedNote = {
        // _id: Note._id,
        title: note.title,
        desc: note.desc,
        dibuatSaat: moment(Note.createdAt),
        dieditSaat: moment(Note.updatedAt),
      };

      res.status(200).json(formattedNote);
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  updateNote: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, desc } = req.body;

      const updatedNote = await Note.findByIdAndUpdate(
        id,
        { title: title, desc: desc },
        { new: true }
      );

      if (!updatedNote) {
        return res.status(500).json({ msg: "Catatan tidak ditemukan" });
      }

      res.status(200).json({ msg: "Catatan berhasil diupdate", updatedNote });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  deleteNote: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedNote = await Note.findByIdAndDelete(id);

      if (!deletedNote) {
        return res.status(404).json({ msg: "Catatan tidak ditemukan" });
      }

      res.status(200).json({ msg: "Catatan berhasil dihapus", deletedNote });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },
};

export default mainController;
