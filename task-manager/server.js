const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'task_manager', // Replace with your database name
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database.');
});

// External API URL
const EXTERNAL_API_URL = 'https://67911187af8442fd7378e736.mockapi.io/tasks';

// Routes
app.get('/tasks', async (req, res) => {
  try {
    // Fetch tasks from both the local MySQL and external API
    const [localTasks] = await db.promise().query('SELECT * FROM tasks');
    const { data: externalTasks } = await axios.get(EXTERNAL_API_URL);

    // Combine the results
    const allTasks = [...localTasks, ...externalTasks];
    res.json(allTasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/tasks', async (req, res) => {
  const task = req.body;

  // Add to local MySQL database
  try {
    const [result] = await db.promise().query('INSERT INTO tasks SET ?', task);
    const newTask = { id: result.insertId, ...task };

    // Also add to the external API
    await axios.post(EXTERNAL_API_URL, task);

    res.json(newTask);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Remove from local MySQL database
    await db.promise().query('DELETE FROM tasks WHERE id = ?', id);

    // Also remove from the external API
    await axios.delete(`${EXTERNAL_API_URL}/${id}`);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
