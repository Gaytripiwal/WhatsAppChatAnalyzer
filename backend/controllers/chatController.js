const fs = require("fs");
const { parseChat } = require("../utils/parser");

exports.analyzeChat = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { messages = [], joined = [] } = parseChat(req.file.path);

    // ---------- GROUP BY DATE ----------
    const dateMap = {};

    messages.forEach(({ date, user }) => {
      if (!date || !user) return;

      if (!dateMap[date]) {
        dateMap[date] = { activeSet: new Set(), joined: 0 };
      }
      dateMap[date].activeSet.add(user);
    });

    joined.forEach(({ date }) => {
      if (!date) return;

      if (!dateMap[date]) {
        dateMap[date] = { activeSet: new Set(), joined: 0 };
      }
      dateMap[date].joined += 1;
    });

    // ---------- LAST 7 DAYS ----------
    const graphData = {};
    Object.keys(dateMap)
      .sort()
      .slice(-7)
      .forEach((date) => {
        graphData[date] = {
          active: dateMap[date].activeSet.size,
          joined: dateMap[date].joined,
        };
      });

    // ---------- ACTIVE USERS ≥ 4 DAYS ----------
    const userDays = {};
    messages.forEach(({ user, date }) => {
      if (!user || !date) return;

      if (!userDays[user]) userDays[user] = new Set();
      userDays[user].add(date);
    });

    const activeUsers = Object.keys(userDays).filter(
      (u) => userDays[u].size >= 4
    );

    fs.unlinkSync(req.file.path);

    res.json({ graphData, activeUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat analysis failed" });
  }
};
