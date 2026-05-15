# SprintHub Backend API

Backend API for a task management platform inspired by Jira and Trello:

* Node.js
* Express.js
* MySQL
* JWT Authentication
* Role Based Access Control (RBAC)

---

# Features

## Authentication

* Register
* Login
* Refresh Token
* Logout
* JWT Access Token
* Protected Routes

---

## Workspace Management

* Create workspace
* Join workspace
* Workspace members
* Role per workspace

---

## Task Management

* Create task
* Assign task
* Update task status
* Priority system
* Due date

---

## Comments

* Comment per task
* Activity log

---

# Tech Stack

| Tech       | Description           |
| ---------- | --------------------- |
| Node.js    | Runtime JavaScript    |
| Express.js | Backend Framework     |
| MySQL      | Relational Database   |
| JWT        | Authentication        |
| bcryptjs   | Password Hashing      |
| dotenv     | Environment Variables |
| nodemon    | Development Server    |

---

# Project Structure

```bash
src/
├── config/
│   └── cons.js
│
├── controller/
│   └── auth.controller.js
│
├── middleware/
│   └── auth.middleware.js
│
├── model/
│   └── userModel.js
│
├── routes/
│   └── auth.routes.js
│
├── services/
│   └── auth.service.js
│
index.js
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/rizkys-code/taskFlowLikeaJira.git
```

---

## Move To Project Folder

```bash
cd sprinthub-backend
```

---

## Install Dependencies

```bash
npm install
```

---

# Required Packages

```bash
npm install express mysql2 dotenv bcryptjs jsonwebtoken cors
```

Development dependency:

```bash
npm install -D nodemon
```

---

# Environment Variables

Create `.env`

```env
PORT=4000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=taskflow

JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret
```

---

# Run Project

## Development

```bash
npx nodemon index.js
```

---

## Production

```bash
node index.js
```

---

# Database Schema

## ERD

```text
users
│
├── workspaces
│     └── workspace_members
│
├── tasks
│     └── comments
│
└── activities
```

---

# Tables

## users

Stores all user accounts.

| Column        | Type    |
| ------------- | ------- |
| id            | INT     |
| email         | VARCHAR |
| password      | VARCHAR |
| role          | ENUM    |
| refresh_token | TEXT    |

---

## workspaces

Stores project/workspace data.

| Column   | Type    |
| -------- | ------- |
| id       | INT     |
| name     | VARCHAR |
| owner_id | INT     |

---

## workspace_members

Stores workspace membership.

| Column       | Type |
| ------------ | ---- |
| workspace_id | INT  |
| user_id      | INT  |
| role         | ENUM |

---

## tasks

Stores all tasks.

| Column       | Type    |
| ------------ | ------- |
| workspace_id | INT     |
| title        | VARCHAR |
| description  | TEXT    |
| status       | ENUM    |
| priority     | ENUM    |
| assignee_id  | INT     |
| created_by   | INT     |

---

## comments

Stores task comments.

| Column  | Type |
| ------- | ---- |
| task_id | INT  |
| user_id | INT  |
| content | TEXT |

---

# API Endpoints

## Auth Routes

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| POST   | /auth/register | Register user        |
| POST   | /auth/login    | Login user           |
| POST   | /auth/refresh  | Refresh access token |
| POST   | /auth/logout   | Logout user          |

---

# Protected Routes

| Method | Endpoint      | Access     |
| ------ | ------------- | ---------- |
| GET    | /auth/profile | User/Admin |
| GET    | /auth/admin   | Admin Only |

---

# Authentication Flow

```text
User Login
↓
Generate Access Token
↓
Generate Refresh Token
↓
Save Refresh Token to Database
↓
Access Protected Route
```

---

# Role Based Access Control (RBAC)

Roles:

```text
admin
user
owner
member
```

Middleware:

```js
checkRole("admin")
```

---

# Middleware

## verifyToken

Used to:

* Verify JWT token
* Decode token
* Store decoded user data into `req.user`

---

## checkRole

Used to:

* Restrict route access
* Validate user role

---

# CORS

Used
