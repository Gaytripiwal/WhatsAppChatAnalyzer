const express = require("express");
const multer = require("multer");
const { analyzeChat } = require("../controllers/chatController");

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), analyzeChat);

module.exports = router;
