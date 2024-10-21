// src/services/api.js
import axios from 'axios';

const API_URL = 'https://kaushalam-backend-final.onrender.com/api/tasks';

export const fetchTasks = () => axios.get(API_URL);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, updatedTask) => axios.put(`${API_URL}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
export const completeTask = (id) => axios.patch(`${API_URL}/${id}/complete`);

