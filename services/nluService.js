const languageMap = require("../utils/languageMap");

function detectLanguageAndSymptoms(text) {
  let lang = "en";
  if (/[\u0A00-\u0A7F]/.test(text)) lang = "pa"; // Punjabi Gurmukhi
  else if (/[\u0900-\u097F]/.test(text)) lang = "hi"; // Hindi Devanagari

  const lowerText = text.toLowerCase();
  let symptoms = [];

  Object.keys(languageMap).forEach((key) => {
    if (lowerText.includes(key)) {
      symptoms.push(languageMap[key]);
    }
  });

  return { lang, symptoms };
}

module.exports = { detectLanguageAndSymptoms };
