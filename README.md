# Task Manager Web Application

## Overview
This project is a web application for managing tasks. It allows users to create and retrieve tasks while synchronizing with an external API (MockAPI.io). The system consists of a Laravel-based backend and a Vue.js frontend.

## Features
- *Backend (Laravel)*:
  - POST /api/tasks: Creates a task, stores it in the database, and syncs it with the external API.
  - GET /api/tasks: Retrieves all local tasks and merges them with tasks from the external API.
  
- *Frontend (Vue.js)*:
  - A form for adding new tasks.
  - A table for displaying combined task lists.

- *Database*:
  - Stores tasks with fields: id, external_id, title, completed, created_at, updated_at.

---

## Setup Instructions

### *Backend (Laravel)*

#### 1. Clone the repository
sh
 git clone <your-repo-url>
 cd task-manager-backend


#### 2. Install dependencies
sh
 composer install


#### 3. Set up environment variables
sh
 cp .env.example .env

Modify .env with your database credentials:
env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=task_manager
DB_USERNAME=root
DB_PASSWORD=


#### 4. Generate application key
sh
 php artisan key:generate


#### 5. Run migrations
sh
 php artisan migrate


#### 6. Start the server
sh
 php artisan serve


The backend will be available at http://127.0.0.1:8000

---

### *Frontend (Vue.js)*

#### 1. Clone the repository
sh
 git clone <your-repo-url>
 cd task-manager-frontend


#### 2. Install dependencies
sh
 npm install


#### 3. Start the development server
sh
 npm run dev


The frontend will be available at http://127.0.0.1:5173

---

## API Documentation

### *POST /api/tasks*
*Request Body:*
json
{
    "title": "New Task",
    "completed": false
}

*Response:*
json
{
    "id": 1,
    "external_id": "abcd1234",
    "title": "New Task",
    "completed": false,
    "created_at": "2025-01-22T12:00:00Z",
    "updated_at": "2025-01-22T12:00:00Z"
}


### *GET /api/tasks*
*Response:*
json
{
    "local_tasks": [
        { "id": 1, "title": "Task A", "completed": false, "external_id": null }
    ],
    "external_tasks": [
        { "id": "abcd1234", "title": "Task B", "completed": true }
    ]
}


---

## Technologies Used
- *Backend:* Laravel, MySQL
- *Frontend:* Vue.js, Axios
- *External API:* MockAPI.io
- *Version Control:* GitHub/Bitbucket

---

## Error Handling
- *Validation Errors:* Returns 422 for invalid requests.
- *API Failures:* Graceful degradation when MockAPI.io is unreachable.
- *Database Errors:* Uses Laravel's built-in exception handling.

---

## Contributing
1. Fork the repository
2. Create a new branch (feature-xyz)
3. Commit your changes
4. Push to your fork
5. Open a Pull Request

---

## License
This project is open-source and available under the MIT License.
