const conditions = [
  {
    name: { en: "Common Cold", pa: "ਜ਼ੁਕਾਮ", hi: "साधारण जुकाम" },
    symptoms: ["cough", "fever", "runny nose"],
    specialist: "General Physician",
    causes: { en: ["Viral infection"], pa: ["ਵਾਇਰਲ ਇੰਫੈਕਸ਼ਨ"], hi: ["वायरल संक्रमण"] },
    remedies: { en: ["Steam inhalation", "Rest", "Drink fluids"], pa: ["ਸਟਿਮ ਲਓ", "ਆਰਾਮ ਕਰੋ"], hi: ["भाप लें", "आराम करें"] }
  }
];

function findMatch(symptoms, lang) {
  for (const cond of conditions) {
    let matches = symptoms.filter((s) => cond.symptoms.includes(s));
    if (matches.length > 0) {
      return {
        condition: cond.name[lang] || cond.name.en,
        specialist: cond.specialist,
        causes: cond.causes[lang] || cond.causes.en,
        remedies: cond.remedies[lang] || cond.remedies.en,
      };
    }
  }
  return null;
}

module.exports = { findMatch };
