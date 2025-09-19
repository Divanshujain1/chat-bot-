// const { detectLanguageAndSymptoms } = require("../services/nluService");
// const { getAIResponse } = require("../services/aiService");
// const { checkRedFlags } = require("../utils/redFlags");
// const knowledgeBase = require("../services/knowledgeBase");



// async function handleChat(req, res, next) {
//   try {
//     const { text } = req.body;
//     if (!text) {
//       return res.status(400).json({ error: "No input text provided" });
//     }

//     // Step 1: Check for emergency red flags
//     const redFlag = checkRedFlags(text);
//     if (redFlag) {
//       return res.json({
//         urgent: true,
//         message: redFlag,
//       });
//     }

//     // Step 2: Extract language + symptoms
//     const { lang, symptoms } = detectLanguageAndSymptoms(text);

//     // Step 3: Rule-based fallback (if symptoms in DB)
//     const ruleResult = knowledgeBase.findMatch(symptoms, lang);
//     if (ruleResult) {
//       return res.json({
//         urgent: false,
//         source: "knowledgeBase",
//         ...ruleResult,
//       });
//     }

//     // Step 4: AI-based response
//     const aiResult = await getAIResponse(text, lang);

//     return res.json({
//       urgent: false,
//       source: "AI",
//       ...aiResult,
//     });
//   } catch (err) {
//     next(err);
//   }
// }

// module.exports = { handleChat };
