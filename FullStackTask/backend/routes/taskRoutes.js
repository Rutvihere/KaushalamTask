// const express = require('express');
// const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// const router = express.Router();

// router.route('/')
//   .get(getTasks)
//   .post(createTask);

// router.route('/:id')
//   .put(updateTask)
//   .delete(deleteTask);

// module.exports = router;


const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Define routes for tasks
router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/complete', taskController.completeTask); // Route to mark a task as completed

module.exports = router;
