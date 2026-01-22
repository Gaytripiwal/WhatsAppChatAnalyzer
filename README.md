<!-- # WhatsAppChatAnalyzer

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

GitHub Repository: https://github.com/yourusername/whatsapp-chat-analyzer -->
# WhatsApp Chat Analyzer

## 1. Project Description
This project enables users to analyze WhatsApp chat files exported in `.txt` format.

**Key functionalities:**
- Parses messages and computes metrics like daily active users and new users joining.
- Generates interactive bar charts for the last 7 days.
- Lists users who are active for 4 or more days.
- Provides visual insights into group activity and user participation.
- Includes toolbar icons (download, zoom, select, comment, add) for enhanced UI interaction.

---

## 2. Features

1. **Chat Upload**
   - Upload WhatsApp chat files in `.txt` format.
   - Validates file and alerts if invalid or empty.

2. **Message & User Parsing**
   - Efficient parsing using Node.js backend.
   - Detects daily active users and new users joining.

3. **Graphs & Visualization**
   - **Blue Bar:** Number of users messaging each day.
   - **Orange Bar:** Number of users joining each day.
   - Responsive and interactive charts powered by **Recharts**.
   - Displays active users (≥ 4 days) separately.

4. **Toolbar Icons**
   - Download chart as image.
   - Zoom and pan interactions.
   - Select, comment, or add annotations.

5. **UI/UX**
   - Customizable, modern UI.
   - Fixed width and height charts with pleasant color scheme.
   - Handles errors gracefully.

---

## 3. Tech Stack

- **Frontend:** React.js, Recharts, React Icons
- **Backend:** Node.js, Express.js, FS module
- **Parsing Utility:** Custom parser for WhatsApp `.txt` chat format
- **Styling:** Inline CSS with modern layout

---

## 4. Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/whatsapp-chat-analyzer.git

# 1. Clone the repository
git clone https://github.com/yourusername/whatsapp-chat-analyzer.git

# 2. Go to backend folder and install dependencies
cd whatsapp-chat-analyzer/backend
npm install

# 3. Go to frontend folder and install dependencies
cd ../frontend
npm install

# 4. Run backend server
cd ../backend
npm start

# 5. Run frontend
cd ../frontend
npm start

# 6. Open in browser
Open http://localhost:3000


5. Usage

1. Click Choose File to upload your WhatsApp chat .txt.

2. The app parses the chat and generates a graph for the last 7 days activity.

3. Scroll down to see the list of active users.

4. Use toolbar icons for additional interactions:

📸 Download

🔍 Zoom 

6. Sample Output

Blue Bar: Active users per day

Orange Bar: New users joining per day

Interactive charts showing group participation trends.

7. Project URL

GitHub Repository: https://github.com/yourusername/whatsapp-chat-analyzer

 