📚 Smart Classroom Management System

An intelligent and modern classroom management system designed to digitize and streamline educational workflows for students and teachers. Built with React.js (frontend), Node.js + Express (backend), and MongoDB (database), this platform offers a seamless academic experience.

⸻

🔗 Live Demo

👉 Smart Classroom (Demo Link)

⸻

🚀 Features

🧑‍🎓 For Students
	•	Secure Login and Registration
	•	📄 Dashboard with profile, attendance, tests, quizzes, and enrolled courses
	•	📅 Class Schedule (Regular, Extra, Doubt Classes)
	•	📂 Access Uploaded Assignments and Study Materials
	•	🧠 Attempt Quizzes with Timer and Question Navigation
	•	📊 Track Progress and Upcoming Events

👩‍🏫 For Teachers
	•	Login and Dashboard for Teachers
	•	📥 Upload Assignments and Resources
	•	📸 Generate QR Codes for Class Attendance
	•	✅ Mark Attendance via QR Scan
	•	🧾 View and Export Attendance Reports
	•	📝 Upload and Monitor Quizzes
	•	📅 Manage Class Schedules

⸻

🛠️ Tech Stack

Frontend
	•	React.js
	•	Tailwind CSS
	•	React Router
	•	Axios

Backend
	•	Node.js
	•	Express.js
	•	MongoDB + Mongoose
	•	JWT Authentication
	•	Multer (for file upload)
	•	QR Code Generator & Scanner

Others
	•	Firebase (for QR scan in Android App)
	•	ZXing (QR Scanner Android Library)
	•	PDFKit/ExcelJS (export reports)

⸻

📁 Project Structure
smart-classroom/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env
│   ├── server.js
│   └── config/
│       └── db.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── utils/
│   │       └── api.js
│   └── vite.config.js
│
├── package.json
└── README.md

🔒 Authentication
	•	JWT-based authentication for secure login sessions.
	•	Protected routes for dashboard and profile access.

⸻

🧪 Installation

Frontend

cd client
npm install
npm run dev

Backend

cd server
npm install
node index.js

