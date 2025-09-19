function checkRedFlags(text) {
  const lower = text.toLowerCase();
  const redFlags = [
    { keyword: "chest pain", message: "🚨 Emergency: Please go to nearest hospital immediately!" },
    { keyword: "सांस नहीं", message: "🚨 आपातकाल: तुरंत अस्पताल जाएं!" },
    { keyword: "ਸਾਹ ਨਹੀਂ", message: "🚨 ਐਮਰਜੈਂਸੀ: ਕਿਰਪਾ ਕਰਕੇ ਤੁਰੰਤ ਹਸਪਤਾਲ ਜਾਓ!" }
  ];

  for (let rf of redFlags) {
    if (lower.includes(rf.keyword)) {
      return rf.message;
    }
  }
  return null;
}

module.exports = { checkRedFlags };
