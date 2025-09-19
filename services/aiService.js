const openai = require("../config/openai");

async function getAIResponse(userText, lang) {
  const prompt = `
  User wrote in [${lang}] symptoms: "${userText}".
  Your task:
  - Detect possible diseases (not 100% diagnosis)
  - Suggest which doctor specialist to consult
  - List common causes
  - Suggest 2-3 safe home remedies
  - Reply in same language [${lang}]
  - Always add disclaimer: "This is not a medical diagnosis. Please consult a doctor."
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini", 
    messages: [{ role: "user", content: prompt }],
  });

  return { answer: response.choices[0].message.content };
}

module.exports = { getAIResponse };
