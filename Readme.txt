# Task Manager Application

This project is a simple web application for managing tasks. It interacts with a mock external API and provides functionality for creating tasks and retrieving a combined list of local and external tasks.

---

## Features

### Backend (Laravel)
1. *POST /api/tasks*:
   - Accepts task details (title, completed) from the request.
   - Stores the task in a local database (MySQL).
   - Posts the task to an external API and stores the external task ID in the local database.
   - Returns the task details (local + external IDs) as a JSON response.

2. *GET /api/tasks*:
   - Retrieves all tasks stored in the local database.
   - Fetches additional tasks from the external API and combines them with the local tasks.
   - Returns the combined list as a JSON response.

### Frontend (Vue.js)
1. *Task Creation Form*:
   - Input fields for task title and completed status.
   - Sends data to /api/tasks via a POST request.

2. *Task Display Table*:
   - Fetches the combined list of tasks from /api/tasks via a GET request.
   - Displays task details (title, completed, source, and ID).

---

## Requirements

### Backend
- PHP 8.x
- Composer
- Laravel Framework
- MySQL Database

### Frontend
- Node.js (v14 or above)
- npm or yarn
- Vue.js Framework

---

## Installation

### Backend Setup
1. Clone the backend repository:
   bash
   git clone <backend-repo-url>
   cd task-manager-backend
   
2. Install dependencies:
   bash
   composer install
   
3. Configure environment:
   bash
   cp .env.example .env
   php artisan key:generate
   
4. Update .env file:
   env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=task_manager
   DB_USERNAME=root
   DB_PASSWORD=
   
5. Run migrations:
   bash
   php artisan migrate
   
6. Start the server:
   bash
   php artisan serve
   

### Frontend Setup
1. Clone the frontend repository:
   bash
   git clone <frontend-repo-url>
   cd task-manager-frontend
   
2. Install dependencies:
   bash
   npm install
   
3. Start the development server:
   bash
   npm run dev
   

---

## Usage

1. Access the frontend application in your browser at the provided development server URL (e.g., http://localhost:3000).
2. Use the form to create new tasks. The tasks will be stored locally and synced with the external API.
3. View the combined list of tasks (local and external) in the task table.

---

## API Endpoints

### POST /api/tasks
- *Request Body*:
  json
  {
    "title": "Sample Task",
    "completed": false
  }
  
- *Response*:
  json
  {
    "id": 1,
    "title": "Sample Task",
    "completed": false,
    "external_id": "12345",
    "created_at": "2025-01-22T10:00:00.000Z",
    "updated_at": "2025-01-22T10:00:00.000Z"
  }
  

### GET /api/tasks
```
- *Response*:
  json
  {
    "local_tasks": [
      {
        "id": 1,
        "title": "Sample Task",
        "completed": false,
        "external_id": "12345",
        "created_at": "2025-01-22T10:00:00.000Z",
        "updated_at": "2025-01-22T10:00:00.000Z"
      }
    ],
    "external_tasks": [
      {
        "id": "67890",
        "title": "External Task",
        "completed": true
      }
    ]
  }
  ```

---

## Folder Structure

### Backend
```
project-root/
├── app/
├── database/
│   ├── migrations/
│   └── seeders/
├── routes/
│   └── api.php
├── .env
└── composer.json
```

### Frontend
```
project-root/
├── src/
│   ├── components/
│   │   ├── TaskForm.vue
│   │   └── TaskList.vue
│   └── App.vue
├── public/
├── package.json
└── vite.config.js

```


## Error Handling

- Backend:
  - Validation errors return a 422 status with error details.
  - Network/API errors return a 500 status with an appropriate message.

- Frontend:
  - Errors during task creation or fetching display a console error message (can be improved with user-friendly alerts).

---

## Contributions

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss the proposed changes.


---

## Author

- Mohamed Musse Omar Galde

---
