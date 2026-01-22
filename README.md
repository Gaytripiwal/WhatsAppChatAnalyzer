# WhatsAppChatAnalyzer

🔹 Project Description

This project allows users to upload WhatsApp chat files (exported .txt format).

It parses messages and computes metrics like daily active users and new users joining.

The app generates interactive bar charts for the last 7 days.

Users who are active for ≥ 4 days are listed separately.

Provides visual insights into group activity and user participation.

Includes toolbar icons (download, zoom, select, comment, add) for UI interaction.

🔹 Features

Upload WhatsApp chat in .txt format.

Parse messages and users efficiently using Node.js backend.

Generate graphs:

Blue bar → Number of users messaging each day.

Orange bar → Number of users joining each day.

List active users who participated for 4 or more days.

Responsive and interactive charts using Recharts.

Toolbar icons for download, zoom, pan, select, comment, add.

Customizable UI with fixed width, height, and pleasant color scheme.

Handles errors gracefully, alerts user if chat file is invalid or empty.

Tech Stack

Frontend: React.js, Recharts, React Icons

Backend: Node.js, Express.js, FS module

Parsing Utility: Custom parser for WhatsApp .txt chat format

Styling: Inline CSS, modern UI layout

Installation
# Clone the repository
git clone https://github.com/yourusername/whatsapp-chat-analyzer.git

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Run backend server
cd ../backend
npm start

# Run frontend
cd ../frontend
npm start
Open browser at http://localhost:3000

🔹 Usage

Click Choose File to upload your WhatsApp chat .txt.

The app parses the chat and generates a graph for last 7 days activity.

Scroll down to see active users list.

Use toolbar icons for extra interactions:

📸 Download

Sample Output

Blue bar → Active users each day

Orange bar → New users joining each day

Project URL

GitHub Repository: https://github.com/yourusername/whatsapp-chat-analyzer