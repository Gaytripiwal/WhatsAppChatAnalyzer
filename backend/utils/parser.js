const fs = require("fs");

// 🔹 Convert WhatsApp date → YYYY-MM-DD
function normalizeDate(rawDate) {
  if (!rawDate) return null;

  // supports: 1/4/24 , 01-04-2024 , 4/1/2024
  const parts = rawDate.split(/[\/\-]/);
  if (parts.length !== 3) return null;

  let [d, m, y] = parts;
  if (y.length === 2) y = "20" + y;

  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

exports.parseChat = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const lines = content.split("\n");

  const messages = [];
  const joined = [];

  lines.forEach((line) => {
    // Example:
    // 1/4/24, 10:30 AM - John: Hello
    const match = line.match(/^(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}),.*?-\s([^:]+):\s(.*)$/);

    if (!match) return;

    const rawDate = match[1];
    const user = match[2].trim();
    const text = match[3];

    const date = normalizeDate(rawDate);
    if (!date) return;

    messages.push({ date, user, text });
  });

  return { messages, joined };
};
