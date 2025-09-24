const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || ["*"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// API routes
app.get("/", (req, res) => {
  res.send("✅ Backend is running fine!");
});
app.use("/api/chat", chatRoutes);
app.use("/api/diseases", diseaseRoutes);
app.use("/api/medicines", medicineRoutes);

// Error handler
app.use(errorHandler);

// Serve frontend in production
//if (process.env.NODE_ENV === "production") {
  //const frontendPath = path.join(__dirname, "../frontend/build");
  // app.use(express.static(frontendPath));

  // Correct fallback route for React
  //app.get(/.*/, (req, res) => {
    //res.sendFile(path.join(frontendPath, "index.html"));
  //});
//}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`
  )
);
