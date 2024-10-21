// src/components/TaskForm.js
import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const TaskForm = ({ open, onClose, onAddTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      onAddTask(taskDescription);
      setTaskDescription(''); // Clear the input field
      onClose(); // Close the dialog
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Task Description"
          type="text"
          fullWidth
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddTask} color="primary">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
