import express from "express";
import databaseConnection from "./config/database.js"; // Import koneksi database
import mainRoutes from "./routes/mainRoutes.js"; // Import rute utama

const app = express();
const port = 3000;
app.use(express.json());

// Menggunakan koneksi database
databaseConnection();

// Menggunakan rute utama
app.use("/", mainRoutes);

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
