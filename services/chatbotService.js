// Simple rule-based chatbot (can replace with AI API later)
function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  if (msg.includes("hello")) return "Hi! How can I help you today?";
  if (msg.includes("hospital")) return "The nearest Civil Hospital is in Nabha, open 9 AM - 5 PM.";
  if (msg.includes("doctor")) return "Currently, 11 doctors are available out of 23 sanctioned posts.";

  return "Sorry, I didn’t understand that. Can you rephrase?";
}

module.exports = { getBotResponse };
