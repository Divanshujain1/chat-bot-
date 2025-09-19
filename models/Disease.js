const mongoose = require("mongoose");

const DiseaseSchema = new mongoose.Schema({
  name: {
    en: { type: String, required: true },
    hi: { type: String },
    pa: { type: String },
  },
  symptoms: {
    en: [String],
    hi: [String],
    pa: [String],
  },
  cause: {     // Fixed from "causes"
    en: String,
    hi: String,
    pa: String,
  },
  doctor: {
    en: String,
    hi: String,
    pa: String,
  },
  remedy: {    // Fixed from "homeRemedy"
    en: [String],
    hi: [String],
    pa: [String],
  },
  emergency: { type: Boolean, default: false },
});

module.exports = mongoose.model("Disease", DiseaseSchema);
