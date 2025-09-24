const Disease = require ("../models/Disease");

const chatController = async (req, res) => {
  try {
    const { symptoms, lang } = req.body;

    if (!symptoms || !lang) {
      return res.status(400).json({ message: "Symptoms and language are required" });
    }

    const inputSymptoms = symptoms
      .toLowerCase()
      .split(",")
      .map(s => s.trim());

    const diseases = await Disease.find();

    const matchedDiseases = diseases
      .map(disease => {
        const diseaseSymptoms = disease.symptoms[lang]?.map(s => s.toLowerCase()) || [];
        const matchCount = diseaseSymptoms.filter(ds =>
          inputSymptoms.some(isym => ds.includes(isym) || isym.includes(ds))
        ).length;
        return { disease, matchCount };
      })
      .filter(item => item.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);

    if (!matchedDiseases.length) {
      return res.status(200).json({ message: "❌ No matching disease found" });
    }

    const topMatches = matchedDiseases.slice(0, 2);

    const response = topMatches.map(item => {
      const d = item.disease;
      return {
        name: d.name[lang] || d.name.en,
        symptoms: d.symptoms[lang] || [],
        cause: d.cause ? d.cause[lang] : "Not available",
        doctor: d.doctor ? d.doctor[lang] : "Consult a doctor",
        remedy: d.remedy ? d.remedy[lang] : "Not available",
        emergency: d.emergency || false,
      };
    });

    res.status(200).json({ count: response.length, data: response });
  } catch (error) {
    console.error("ChatController Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = chatController;
