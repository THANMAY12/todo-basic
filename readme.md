
# To-Do List Application (Full Stack)
## Overview
This project is a simple full-stack To-Do List application built using Node.js, Express, MongoDB, and React. The goal of this project was to understand how a frontend and backend communicate and how data is stored and managed using APIs.

The application allows users to:
- Add tasks
- View tasks
- Delete tasks
- Mark tasks as completed
- Search tasks

## Technologies Used
### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Frontend
- React (Vite)
- Axios
- Basic CSS


## How to Run the Project
### 1. Clone the repository

git clone [https://github.com/THANMAY12/todo-basic.git](https://github.com/THANMAY12/todo-basic.git)
cd todo-basic

### 2. Setup Backend
Go to backend folder:


cd backend

Install dependencies:

npm install
Create a `.env` file using the example below.

Example:
VITE_API_URL=http://localhost:5000/api/tasks

Run the server:

npm run dev

### 3. Setup Frontend

Go to frontend folder:

cd todo-frontend
Install dependencies:
npm install
Run the frontend:
npm run dev

## Environment Variables

Create a `.env` file inside the backend folder.

Example:
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=[http://localhost:5173](http://localhost:5173)
PORT=5000

## API Endpoints

- GET `/api/tasks` → Get all tasks  
- POST `/api/tasks` → Create a task  
- PUT `/api/tasks/:id` → Update a task  
- DELETE `/api/tasks/:id` → Delete a task  
- PATCH `/api/tasks/:id` → Toggle task status  
- GET `/api/tasks/search/:text` → Search tasks  


## Testing

I tested the backend APIs using Postman.

All endpoints were tested:
- Create task
- Get tasks
- Update task
- Delete task
- Search task



## What I Learned

- How to build REST APIs using Express
- How to connect Node.js with MongoDB using Mongoose
- How React communicates with backend APIs using Axios
- How to manage state in React using useState and useEffect
- How to deploy frontend and backend separately


## Challenges Faced

- Understanding how CORS works and fixing related errors
- Connecting frontend and backend after deployment
- Handling API errors properly
- Debugging issues where frontend was not receiving correct data

## Improvements (Future Work)

- Add authentication (login/signup)
- Add task deadlines and priority
- Improve UI design
- Add edit task feature


## Conclusion

This project helped me understand the basics of full-stack development. I now have a better understanding of how frontend and backend work together and how APIs are used in real applications.
