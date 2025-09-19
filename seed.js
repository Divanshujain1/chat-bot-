const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Disease = require("./models/Disease");
const Medicine = require("./models/Medicine"); // ✅ Add this line

const diseases = require("./data/Disease.json");
const medicines = require("./data/Medicine.json");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Clear old data
    await Disease.deleteMany();
    await Medicine.deleteMany();

    // Insert new data
    await Disease.insertMany(diseases);
    await Medicine.insertMany(medicines);

    console.log("✅ Disease & Medicine Data Seeded!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
