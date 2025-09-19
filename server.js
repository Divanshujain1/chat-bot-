const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const errorHandler = require("./middleware/errorHandler");
const medicineRoutes = require("./routes/medicineRoutes");


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend if exists
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.send("✅ Backend is running fine!");
});

// API routes
app.use("/api/chat", chatRoutes);
app.use("/api/diseases", diseaseRoutes);
app.use("/api/medicines", medicineRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
