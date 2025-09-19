const express = require("express");
const router = express.Router();
const Disease = require("../models/Disease");

// GET /api/diseases?symptom=fever&lang=en
router.get("/", async (req, res) => {
  const { symptom, lang = "en" } = req.query;

  try {
    let diseases;

    if (symptom) {
      diseases = await Disease.find({
        [`symptoms.${lang}`]: { $regex: new RegExp(symptom, "i") },
      });
    } else {
      diseases = await Disease.find();
    }

    if (!diseases.length) {
      return res.json({ message: "❌ No disease found for this symptom." });
    }

    const formatted = diseases.map(d => ({
      name: d.name[lang] || d.name.en,
      symptoms: d.symptoms[lang] || [],
      cause: d.cause ? d.cause[lang] : "Not available",      // Fixed
      doctor: d.doctor ? d.doctor[lang] : "Consult a doctor",
      remedy: d.remedy ? d.remedy[lang] : [],                 // Fixed
      emergency: d.emergency || false,
    }));

    res.json({ count: formatted.length, data: formatted });
  } catch (err) {
    console.error("Error fetching diseases:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
