# 📝 To-Do List Application (Full Stack)

## 🚀 Overview
This is a full-stack To-Do List application built using **Node.js, Express.js, MongoDB, and React (Vite)**.  
The application allows users to manage daily tasks efficiently with features like creating, updating, deleting, searching, and marking tasks as completed.

The backend follows a modular structure using **Routes, Controllers, and Models (MVC pattern)** for better organization and maintainability.


## 🛠️ Tech Stack

### 🔹 Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

### 🔹 Frontend
- React (Vite)
- Axios
- CSS



## ⚙️ Features

✔ Add new tasks  
✔ View all tasks  
✔ Update tasks  
✔ Delete tasks  
✔ Mark tasks as complete/incomplete  
✔ Search tasks  
✔ Real-time UI updates  



## 🚀 How to Run Locally

### 1️⃣ Clone the Repository
git clone https://github.com/THANMAY12/todo-basic.git


### 2️⃣ Run Backend
cd backend
npm install
npm run dev


---

### 3️⃣ Run Frontend
cd todo-frontend
npm install
npm run dev


---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |
| PATCH | /api/tasks/:id | Toggle status |
| GET | /api/tasks/search/:text | Search tasks |

---

## 🌐 Deployment Links

- 🔗 Frontend (Netlify): https://startling-sfogliatella-df97c1.netlify.app/  
- 🔗 Backend (Render): https://todo-basic-eoww.onrender.com/api/tasks  

---

## 🧪 Testing

- Tested APIs using **Postman**
- Verified all CRUD operations
- Checked frontend-backend integration
- Ensured real-time UI updates

---

## ⚠️ Challenges Faced

- Handling CORS issues between frontend and backend  
- Managing state updates after API calls  
- Deploying frontend and backend separately  
- Handling environment variables in production  

---

## ✅ Solutions

- Configured CORS properly using allowed origins  
- Used Axios for API communication  
- Implemented useState and useEffect for dynamic UI  
- Used dotenv for environment management  

---

## 📦 Submission Details

- GitHub Repository: https://github.com/THANMAY12/todo-basic 
- Frontend Deployment: https://startling-sfogliatella-df97c1.netlify.app/  
- Backend Deployment: https://todo-basic-eoww.onrender.com/api/tasks  

---

## 🎯 Conclusion

This project demonstrates a complete full-stack implementation of a To-Do List application with proper API design, frontend integration, and deployment.