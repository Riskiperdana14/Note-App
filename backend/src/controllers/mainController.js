import mongoose from "mongoose";
import moment from "moment";
import Admin from "../models/mainModel.js";

const mainController = {
  addNote: async (req, res) => {
    try {
      const { tittle, desc } = req.body;

      const newAdmin = new Admin({
        tittle: tittle,
        desc: desc,
      });

      await newAdmin.save();
      res.status(200).json({ msg: "Data masuk" });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  getNotes: async (req, res) => {
    try {
      const admins = await Admin.find();
      const proadmin = admins.map((admin) => {
        return {
          _id: admin._id,
          tittle: admin.tittle,
          desc: admin.desc,
          dibuatSaat: moment(admin.createdAt).format(
            "dddd-DD-MMMM-YYYY[T]HH:mm:ss"
          ),
          dieditSaat: moment(admin.updatedAt).format(
            "dddd-DD-MMMM-YYYY[T]HH:mm:ss"
          ),
        };
      });

      res.status(200).json(proadmin);
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  getNoteById: async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findById(id);

      if (!admin) {
        return res.status(500).json({ msg: "Catatan tidak ditemukan" });
      }

      // Format data yang ingin Anda kembalikan, misalnya hanya ID saja
      const formattedNote = {
        // _id: admin._id,
        tittle: admin.tittle,
        desc: admin.desc,
        dibuatSaat: moment(admin.createdAt).format(
          "dddd-DD-MMMM-YYYY[T]HH:mm:ss"
        ),
        dieditSaat: moment(admin.updatedAt).format(
          "dddd-DD-MMMM-YYYY[T]HH:mm:ss"
        ),
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
      const { tittle, desc } = req.body;

      const updatedAdmin = await Admin.findByIdAndUpdate(
        id,
        { tittle: tittle, desc: desc },
        { new: true }
      );

      if (!updatedAdmin) {
        return res.status(500).json({ msg: "Catatan tidak ditemukan" });
      }

      res.status(200).json({ msg: "Catatan berhasil diupdate", updatedAdmin });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },

  deleteNote: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedAdmin = await Admin.findByIdAndDelete(id);

      if (!deletedAdmin) {
        return res.status(404).json({ msg: "Catatan tidak ditemukan" });
      }

      res.status(200).json({ msg: "Catatan berhasil dihapus", deletedAdmin });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json(error);
    }
  },
};

export default mainController;
