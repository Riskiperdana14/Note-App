import mongoose from "mongoose";

// Koneksi ke database MongoDB
const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/noteApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database ", error);
  }
};

export default databaseConnection;
