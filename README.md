# Task Management App

A simple task management application built with Vue.js for the frontend and Node.js with Express for the backend. This application allows users to create, read, update, and delete tasks, and it synchronizes with a local MySQL database and an external API.

## Features

- Add new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks
- Synchronization with an external API

## Technologies Used

- **Frontend**: Vue.js, Axios
- **Backend**: Laravel
- **Database**: MySQL
- **External API**: [MockAPI](https://67911187af8442fd7378e736.mockapi.io/tasks)

## Installation

### Prerequisites

- Node.js (v12 or later)
- MySQL (or another compatible database)
- npm (comes with Node.js)
- Laravel

### Setting Up the Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/mgalde992/task-management-app.git
   cd task-management-app/my-backend
Install the dependencies:
bash

Copy
npm install
Create a MySQL database and table:
sql

Copy
CREATE DATABASE task_management;

USE task_management;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false
);
Update the server.js file with your MySQL credentials:
javascript

Copy
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username', // Replace with your MySQL username
  password: 'your_password', // Replace with your MySQL password
  database: 'task_management', // Your database name
});
Start the backend server:
bash

Copy
node server.js
Setting Up the Frontend
Navigate to the frontend directory:
bash

Copy
cd ../my-frontend
Install the dependencies:
bash

Copy
npm install
Start the Vue.js application:
bash

Copy
npm run serve
Open your browser and go to http://localhost:8080 to see the application in action.
Usage
Use the form to add new tasks.
View all tasks in the list.
Click "Delete" to remove a task.
Mark tasks as completed using the dropdown.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Vue.js
Node.js
Express
MySQL
MockAPI
sql_more

Copy

### Instructions to Update the README

1. **Replace `YOUR_USERNAME`**: Update the repository link with your actual GitHub username.
2. **Customize Content**: Modify any sections to better fit your project details, such as features or installation steps.

### Conclusion

This `README.md` provides a clear overview of your project, installation instructions, and usage guidelines. It’s a great way to help users understand and contribute to your application. If you need further modifications or additional sections, just let me know!
