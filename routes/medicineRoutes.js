const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");

// GET /api/medicines?name=paracetamol
router.get("/", async (req, res) => {
  try {
    const query = req.query.name?.toLowerCase();
    if (!query) {
      return res.status(400).json({ error: "Medicine name is required" });
    }

    // Find by English, Hindi, or Punjabi name
    const result = await Medicine.find({
      $or: [
        { "name.en": { $regex: query, $options: "i" } },
        { "name.hi": { $regex: query } },
        { "name.pa": { $regex: query } }
      ]
    });

    if (result.length === 0) {
      return res.status(404).json({ message: "No medicine found" });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
