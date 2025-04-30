# 📝 User Feedback System

A full-stack web application that allows users to submit feedback through a form. Submitted feedback is stored in the backend and displayed in a feedback list on the UI.

## 📁 Project Structure

```
user-feedback-system/
├── backend/           # Express.js API for handling feedback
│   └── server.js      # Main backend server file
├── frontend/          # React.js frontend for the feedback form and list
│   └── src/
│       └── App.js     # Main frontend component
├── README.md          # Project documentation
└── package.json       # Root script to run both frontend and backend
```

---

## 🚀 Features

- Submit feedback with name, email, and message.
- View submitted feedback in a styled list.
- Backend built using Express.js and stores data in-memory or in a file (can be upgraded to DB).
- Frontend built with React.js.

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/user-feedback-system.git
cd user-feedback-system
```

### 2. Install Dependencies

#### For frontend:
```bash
cd frontend
npm install
```

#### For backend:
```bash
cd ../backend
npm install
```

### 3. Run the Project (Both Frontend + Backend)

Go to root folder and run:

```bash
npm run dev
```

> This uses `concurrently` to start both frontend and backend together.

---

## 🔧 API Endpoints

- `GET /api/feedback` → Fetch all feedbacks  
- `POST /api/feedback` → Submit new feedback (expects `{ name, email, feedback }`)

---

## 📦 Technologies Used

- React.js (Frontend)
- Express.js (Backend)
- Axios (API requests)
- Node.js
- CSS (Basic styling)

---

## 🧪 Future Improvements

- Add MongoDB or another database for permanent storage.
- Add input validation and security (e.g., rate limiting).
- Add user authentication (optional).
- Deploy using Vercel (frontend) and Render/Heroku (backend).

---

## 👨‍💻 Author

Himanshu Yadav — [GitHub](https://github.com/himanshuyadav492)

---



## 📃 License

This project is open source and free to use.
