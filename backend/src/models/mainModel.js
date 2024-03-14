import mongoose from "mongoose";

const mainSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", mainSchema);

export default Admin;
