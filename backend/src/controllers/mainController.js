import mongoose from "mongoose";
import moment from "moment";
import Admin from "../models/mainModel.js"; // Import model

// Definisi kontroler utama
const mainController = {
  addNote: async (req, res) => {
    try {
      const { nama } = req.body;

      const newAdmin = new Admin({
        _id: new mongoose.Types.ObjectId(),
        name: nama,
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
      //proses admin
      const proadmin = admins.map((admin) => {
        return {
          name: admin.name,
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

  updateNote: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama } = req.body;

      const updatedAdmin = await Admin.findByIdAndUpdate(
        id,
        { name: nama },
        { new: true }
      );

      if (!updatedAdmin) {
        return res.status(404).json({ msg: "Catatan tidak ditemukan" });
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
