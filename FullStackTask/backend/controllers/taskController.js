// const Task = require('../models/taskModel');

// // @desc    Get all tasks
// // @route   GET /api/tasks
// exports.getTasks = async (req, res) => {
//   const tasks = await Task.find();
//   res.json(tasks);
// };

// // @desc    Create a new task
// // @route   POST /api/tasks
// exports.createTask = async (req, res) => {
//   const { title } = req.body;

//   if (!title) {
//     res.status(400).json({ message: 'Title is required' });
//     return;
//   }

//   const task = new Task({ title });
//   await task.save();
//   res.status(201).json(task);
// };

// // @desc    Update a task
// // @route   PUT /api/tasks/:id
// exports.updateTask = async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404).json({ message: 'Task not found' });
//     return;
//   }

//   task.title = req.body.title || task.title;
//   task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

//   await task.save();
//   res.json(task);
// };

// // @desc    Delete a task
// // @route   DELETE /api/tasks/:id
// exports.deleteTask = async (req, res) => {
//     const task = await Task.findById(req.params.id);
  
//     if (!task) {
//       res.status(404).json({ message: 'Task not found' });
//       return;
//     }
  
//     await Task.findByIdAndDelete(req.params.id); // Correct deletion method
//     res.json({ message: 'Task deleted successfully' });
//   };
const Task = require('../models/taskModel');
const express = require('express');
const router = express.Router();

// @desc    Get all tasks
// @route   GET /api/tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new task
// @route   POST /api/tasks
const createTask = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  const task = new Task({ title });
  try {
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = req.body.title || task.title;
    task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark a task as completed
// @route   PATCH /api/tasks/:id/complete
const completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.completed = !task.completed; // Toggle completion status
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Exporting functions
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
};
