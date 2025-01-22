import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};