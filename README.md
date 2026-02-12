<div align="center">

  <h1>CHATlify – Real-Time Private Messaging Platform 💬</h1>

  <p>
    <strong>A full-featured, secure real-time chat application with private messaging, typing indicators, read receipts, file sharing, and low-latency delivery.</strong><br />
    Built with clean backend architecture, strong authentication, and real-time WebSocket communication.
  </p>

  <p>
    <a href="https://github.com/Ps1404/CHATlifyy/stargazers">
      <img src="https://img.shields.io/github/stars/Ps1404/CHATlifyy?style=social" alt="GitHub stars" />
    </a>
    <a href="https://github.com/Ps1404/CHATlifyy/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
    </a>
  </p>

</div>

<p align="center">
  <img 
    src="https://github.com/user-attachments/assets/3d31af68-2e39-43db-8f22-88923d7a81a7" 
    alt="CHATlify Live Chat Interface" 
    width="800" 
  />
</p>

## 🚀 Demo Link

try the **live version** without installing anything:  
Note: This is hosted on a free instance. If the link takes a moment to load, the server is just "waking up"!
👉 <a href="https://chatlifyy.onrender.com" target="_blank" rel="noopener noreferrer">Demo link</a>

## ✨ Features

- Real-time private messaging with end-to-end delivery
- Typing indicators, read receipts, and online status
- File/image sharing (images, PDFs, etc.)
- JWT-based authentication & secure session management
- Input validation & rate limiting (backend-heavy security)
- Message history with infinite scroll
- Responsive UI with dark/light mode support
- 1.2s average message latency via WebSocket optimization

### 🛡️ Backend-Heavy Security & Validation
- **Robust Middleware:** Custom authentication layers verifying JWTs via secure HTTP-only cookies.
- **Strict Data Integrity:** Comprehensive backend validation using high-performance schema validators to ensure zero malformed data entry.
- **Secure Auth:** End-to-end encrypted password hashing and protected API endpoints.

### 📊 Optimized State Management
Integrated a complex state synchronization logic on the frontend to handle "User Typing" indicators, "Online/Offline" presence, and message delivery receipts without unnecessary re-renders.

## 🛠 Tech Stack (Backend-Focused)

| Category          | Technologies Used                          |
|-------------------|--------------------------------------------|
| Backend           | Node.js, Express.js                        |
| Real-Time         | Socket.io (WebSockets)                     |
| Frontend          | React, TailwindCSS, daisyUI                |
| State Management  | Zustand                                    |
| Database          | MongoDB                                    |
| Auth & Security   | JWT,Input Validation,Rate Limiting,Bcrypt  |
| UI/UX             | Lucide Icons, react-hot-toast              |

## 🏗 System Design

The application follows a **Modular Monolith** architecture:
1. **Client Layer:** React hooks manage socket listeners and global user context.
2. **Event Layer:** Socket.io handles the event-emitter logic for real-time broadcasts.
3. **Persistence Layer:** Optimized MongoDB queries with indexing for fast chat history retrieval.

---

## 🚀 Quick Start (Local Setup)

### Prerequisites
- Node.js ≥ 16
- MongoDB (local or Atlas)
- Yarn or npm

### 1. Clone & Install
```bash
git clone https://github.com/Ps1404/CHATlifyy.git
cd CHATlifyy
```
### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```
### 3. Setup
```Bash
# Install dependencies
npm install

# Start the optimized production build
Note: Make sure backend is running on port 5001 (or update frontend proxy in vite.config.js).
npm run build
npm start
```
### 4. Backend Setup
```Bash
cd backend
npm install
npm run dev
```
### 5. Frontend Setup
```Bash
cd ../frontend
npm install
npm run dev
```
