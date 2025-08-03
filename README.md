# 🚀 Turbo Talk

**Turbo Talk** is a real-time chat application built using **React.js**, **Tailwind CSS**, **Redux**, **Node.js**, **Express**, **MongoDB**, **Redis**, **Socket.IO**, and **WebRTC**. It features secure JWT login, real-time messaging, file sharing, and video calling.

---

## ✨ Features

### 🔐 1. Login using JWT Token Authentication

Secure and seamless user authentication using JWT tokens.

### 💬 2. Messaging with Socket.IO & MongoDB (BullMQ)

Real-time messaging powered by Socket.IO, with persistent storage using MongoDB and BullMQ for job queue handling.

### 📁 3. File Sharing

Supports sharing up to **5 files**, with a max size of **10MB per file**.

### 📹 4. WebRTC Video Calling

One-on-one video calls powered by WebRTC for real-time peer-to-peer communication.

---

## ⚙️ Getting Started

Follow the steps below to run the project locally.

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ps8847/turbo-talk.git
cd turbo-talk
```

---

## 🔧 Backend Setup (`/backend`)

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Create `.env` file in `/backend` with the following content:

```env
PORT=5000
MONGO_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret_key
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_USERNAME=your_redis_username
REDIS_PASSWORD=your_redis_password
```

#### 🔍 How to Get These Values:

- **MONGO_URL**: Create an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Create a cluster and get the connection string.
- **JWT_SECRET**: You can use any random strong string, e.g., `ykhrsgbfsdfgyurtgf`.
- **REDIS**: Sign up at [Redis Cloud](https://redis.com/redis-enterprise-cloud/), create a database, and copy the connection details.

### 4. Start Backend Server

```bash
npm run dev
```

The backend will run at: `http://localhost:5000`

---

## 💻 Frontend Setup (`/frontend`)

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Create `.env` file in `/frontend` with the following content:

```env
REACT_APP_BASE_URL=http://localhost:5000
```

### 7. Start Frontend Server

```bash
npm start
```

The frontend will run at: `http://localhost:3000`

---

## 📷 Screenshots (Optional)

You can add screenshots or GIFs of the app UI here.

---

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS, Redux
- **Backend**: Node.js, Express.js, MongoDB, Redis, Socket.IO, BullMQ
- **Authentication**: JWT
- **File Sharing**: ImgBB API
- **Video Calls**: WebRTC

---

## ✅ Future Improvements

- Group chat support
- Message reactions
- Chat history search
- Notifications

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.
