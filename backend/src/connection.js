// connection.js

const mongoose = require("mongoose");

// Koneksi ke database MongoDB
mongoose
  .connect("mongodb://localhost:27017/noteApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database terhubung"))
  .catch((error) => console.log("Kesalahan koneksi database ", error));
