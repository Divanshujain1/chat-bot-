const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  id: Number,
  name: {
    en: String,
    hi: String,
    pa: String
  },
  use: {
    en: String,
    hi: String,
    pa: String
  },
  sideEffects: {
    en: [String],
    hi: [String],
    pa: [String]
  },
  precaution: {
    en: String,
    hi: String,
    pa: String
  }
});

module.exports = mongoose.model("Medicine", medicineSchema);
