const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Disease = require("./models/Disease");
const Medicine = require("./models/Medicine");

const diseases = require("./data/Disease.json");
const medicines = require("./data/Medicine.json");

dotenv.config();

const seedData = async () => {
  try {
    
    await connectDB();

 
    await Disease.deleteMany();
    await Medicine.deleteMany();

   
    await Disease.insertMany(diseases);
    await Medicine.insertMany(medicines);

    console.log("✅ Disease & Medicine Data Seeded!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding Failed:", error.message);
    process.exit(1);
  }
};

// Run seeding
seedData();
