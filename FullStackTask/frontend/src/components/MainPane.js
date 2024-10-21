// // src/components/MainPane.js
// import React, { useEffect, useState } from 'react';
// import { Grid } from '@mui/material';
// import TaskCard from './TaskCard';
// import TaskForm from './TaskForm';
// import SnackbarComponent from './Snackbar';
// import { fetchTasks, addTask, deleteTask, updateTask, completeTask } from '../services/api';

// const MainPane = () => {
//   const [tasks, setTasks] = useState([]);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await fetchTasks();
//       setTasks(response.data);
//     } catch (error) {
//       showSnackbar('Failed to load tasks', 'error');
//     }
//   };

//   const handleAddTask = async (newTask) => {
//     try {
//       await addTask(newTask);
//       loadTasks();
//       showSnackbar('Task added successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to add task', 'error');
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteTask(id);
//       loadTasks();
//       showSnackbar('Task deleted successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to delete task', 'error');
//     }
//   };

//   const handleEditTask = async (id, updatedTask) => {
//     try {
//       await updateTask(id, updatedTask);
//       loadTasks();
//       showSnackbar('Task updated successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to update task', 'error');
//     }
//   };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);
//       loadTasks();
//       showSnackbar('Task marked as completed', 'success');
//     } catch (error) {
//       showSnackbar('Failed to mark task as completed', 'error');
//     }
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <TaskForm addNewTask={handleAddTask} />
//       <Grid container spacing={2}>
//         {tasks.map((task) => (
//           <Grid item xs={12} sm={6} md={4} key={task._id}>
//             <TaskCard
//               task={task}
//               onEdit={() => handleEditTask(task._id, { title: prompt('Edit Task', task.title) })}
//               onDelete={() => handleDeleteTask(task._id)}
//               onComplete={() => handleCompleteTask(task._id)}
//             />
//           </Grid>
//         ))}
//       </Grid>
//       <SnackbarComponent
//         open={snackbarOpen}
//         message={snackbarMessage}
//         handleClose={handleSnackbarClose}
//         severity={snackbarSeverity}
//       />
//     </div>
//   );
// };

// export default MainPane;


// // src/components/MainPane.js
// import React, { useEffect, useState } from 'react';
// import { Grid, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import TaskCard from './TaskCard';
// import TaskForm from './TaskForm';
// import SnackbarComponent from './Snackbar';
// import { fetchTasks, addTask, deleteTask, updateTask, completeTask } from '../services/api';

// const MainPane = () => {
//   const [tasks, setTasks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await fetchTasks();
//       setTasks(response.data);
//     } catch (error) {
//       showSnackbar('Failed to load tasks', 'error');
//     }
//   };

//   const handleAddTask = async (description) => {
//     try {
//       await addTask({ title: description });
//       loadTasks();
//       showSnackbar('Task added successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to add task', 'error');
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteTask(id);
//       loadTasks();
//       showSnackbar('Task deleted successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to delete task', 'error');
//     }
//   };

//   const handleEditTask = async (id, updatedTask) => {
//     try {
//       await updateTask(id, updatedTask);
//       loadTasks();
//       showSnackbar('Task updated successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to update task', 'error');
//     }
//   };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);
//       loadTasks();
//       showSnackbar('Task marked as completed', 'success');
//     } catch (error) {
//       showSnackbar('Failed to mark task as completed', 'error');
//     }
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter(task =>
//     task.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       <TaskForm onAddTask={handleAddTask} />
      
//       {/* Search Bar */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <TextField
//           label="Search Tasks"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ marginRight: '10px', width: '320px' }} // Adjust right margin
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>
//       {/* All Tasks Heading */}
//       <Typography variant="h5">
//         All Tasks ({filteredTasks.length})
//       </Typography>

//       {/* Task Cards */}
//       <Grid container spacing={0}>  {/* Set spacing to 0 */}
//         {filteredTasks.map((task) => (
//           <Grid item xs={12} sm={6} md={4} key={task._id}>
//             <TaskCard
//               task={task}
//               onEdit={() => handleEditTask(task._id, { title: prompt('Edit Task', task.title) })}
//               onDelete={() => handleDeleteTask(task._id)}
//               onComplete={() => handleCompleteTask(task._id)}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <SnackbarComponent
//         open={snackbarOpen}
//         message={snackbarMessage}
//         handleClose={handleSnackbarClose}
//         severity={snackbarSeverity}
//       />
//     </div>
//   );
// };

// export default MainPane;


// // src/components/MainPane.js
// import React, { useEffect, useState } from 'react';
// import { Grid, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import TaskCard from './TaskCard';
// import SnackbarComponent from './Snackbar';
// import { fetchTasks, addTask, deleteTask, updateTask, completeTask } from '../services/api';

// const MainPane = ({ onAddTask }) => {
//   const [tasks, setTasks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await fetchTasks();
//       setTasks(response.data);
//     } catch (error) {
//       showSnackbar('Failed to load tasks', 'error');
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteTask(id);
//       loadTasks();
//       showSnackbar('Task deleted successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to delete task', 'error');
//     }
//   };

//   const handleEditTask = async (id, updatedTask) => {
//     try {
//       await updateTask(id, updatedTask);
//       loadTasks();
//       showSnackbar('Task updated successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to update task', 'error');
//     }
//   };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);
//       loadTasks();
//       showSnackbar('Task marked as completed', 'success');
//     } catch (error) {
//       showSnackbar('Failed to mark task as completed', 'error');
//     }
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter(task =>
//     task.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Search Bar */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <TextField
//           label="Search Tasks"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ marginRight: '10px', width: '320px' }} // Adjust right margin
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>
//       {/* All Tasks Heading */}
//       <Typography variant="h5">
//         All Tasks ({filteredTasks.length})
//       </Typography>

//       {/* Task Cards */}
//       <Grid container spacing={0}>  {/* Set spacing to 0 */}
//         {filteredTasks.map((task) => (
//           <Grid item xs={12} sm={6} md={4} key={task._id}>
//             <TaskCard
//               task={task}
//               onEdit={() => handleEditTask(task._id, { title: prompt('Edit Task', task.title) })}
//               onDelete={() => handleDeleteTask(task._id)}
//               onComplete={() => handleCompleteTask(task._id)}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <SnackbarComponent
//         open={snackbarOpen}
//         message={snackbarMessage}
//         handleClose={handleSnackbarClose}
//         severity={snackbarSeverity}
//       />
//     </div>
//   );
// };

// export default MainPane;



// src/components/MainPane.js
// import React, { useEffect, useState } from 'react';
// import { Grid, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import TaskCard from './TaskCard';
// import SnackbarComponent from './Snackbar';
// import { fetchTasks, deleteTask, updateTask, completeTask } from '../services/api';

// const MainPane = ({ tasks, showCompletedTasks, setTasks }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await fetchTasks();
//       setTasks(response.data);
//     } catch (error) {
//       showSnackbar('Failed to load tasks', 'error');
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteTask(id);
//       setTasks((prevTasks) => prevTasks.filter(task => task._id !== id));
//       showSnackbar('Task deleted successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to delete task', 'error');
//     }
//   };

//   const handleEditTask = async (id, updatedTask) => {
//     try {
//       await updateTask(id, updatedTask);
//       loadTasks(); // Optionally, you can update the state without reloading
//       showSnackbar('Task updated successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to update task', 'error');
//     }
//   };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);
//       loadTasks();
//       showSnackbar('Task marked as completed', 'success');
//     } catch (error) {
//       showSnackbar('Failed to mark task as completed', 'error');
//     }
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter(task =>
//     task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Filter based on completed status
//   const displayedTasks = showCompletedTasks 
//     ? filteredTasks.filter(task => task.completed) // Assuming task has a 'completed' property
//     : filteredTasks;

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Search Bar */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <TextField
//           label="Search Tasks"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ marginRight: '10px', width: '320px' }} // Adjust right margin
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>
//       {/* Tasks Heading */}
//       <Typography variant="h5">
//         {showCompletedTasks ? 'Completed Tasks' : 'All Tasks'} ({displayedTasks.length})
//       </Typography>

//       {/* Task Cards */}
//       <Grid container spacing={0}>  {/* Set spacing to 0 */}
//         {displayedTasks.map((task) => (
//           <Grid item xs={12} sm={6} md={4} key={task._id}>
//             <TaskCard
//               task={task}
//               onEdit={() => handleEditTask(task._id, { title: prompt('Edit Task', task.title) })}
//               onDelete={() => handleDeleteTask(task._id)}
//               onComplete={() => handleCompleteTask(task._id)}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <SnackbarComponent
//         open={snackbarOpen}
//         message={snackbarMessage}
//         handleClose={handleSnackbarClose}
//         severity={snackbarSeverity}
//       />
//     </div>
//   );
// };

// export default MainPane;


// // src/components/MainPane.js
// import React, { useEffect, useState } from 'react';
// import { Grid, TextField, Typography, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import TaskCard from './TaskCard';
// import SnackbarComponent from './Snackbar';
// import { fetchTasks, deleteTask, updateTask, completeTask } from '../services/api';

// const MainPane = ({ tasks, showCompletedTasks, setTasks }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await fetchTasks();
//       setTasks(response.data);
//     } catch (error) {
//       showSnackbar('Failed to load tasks', 'error');
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteTask(id);
//       setTasks((prevTasks) => prevTasks.filter(task => task._id !== id));
//       showSnackbar('Task deleted successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to delete task', 'error');
//     }
//   };

//   const handleEditTask = async (id, updatedTask) => {
//     try {
//       await updateTask(id, updatedTask);
//       loadTasks(); // Optionally, you can update the state without reloading
//       showSnackbar('Task updated successfully', 'success');
//     } catch (error) {
//       showSnackbar('Failed to update task', 'error');
//     }
//   };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);
//       loadTasks();
//       showSnackbar('Task marked as completed', 'success');
//     } catch (error) {
//       showSnackbar('Failed to mark task as completed', 'error');
//     }
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   // Filter tasks based on the search term
//   const filteredTasks = tasks.filter(task =>
//     task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Filter based on completed status
//   const displayedTasks = showCompletedTasks 
//     ? filteredTasks.filter(task => task.completed) // Show completed tasks
//     : filteredTasks.filter(task => !task.completed); // Show uncompleted tasks

//   return (
//     <div style={{ padding: '20px' }}>
//       {/* Search Bar */}
//       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <TextField
//           label="Search Tasks"
//           variant="outlined"
//           size="small"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{ marginRight: '10px', width: '320px' }} // Adjust right margin
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>
//       {/* Tasks Heading */}
//       <Typography variant="h5">
//         {showCompletedTasks ? 'Completed Tasks' : 'Uncompleted Tasks'} ({displayedTasks.length})
//       </Typography>

//       {/* Task Cards */}
//       <Grid container spacing={0}>  {/* Set spacing to 0 */}
//         {displayedTasks.map((task) => (
//           <Grid item xs={12} sm={6} md={4} key={task._id}>
//             <TaskCard
//               task={task}
//               onEdit={() => handleEditTask(task._id, { title: prompt('Edit Task', task.title) })}
//               onDelete={() => handleDeleteTask(task._id)}
//               onComplete={() => handleCompleteTask(task._id)}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       <SnackbarComponent
//         open={snackbarOpen}
//         message={snackbarMessage}
//         handleClose={handleSnackbarClose}
//         severity={snackbarSeverity}
//       />
//     </div>
//   );
// };

// export default MainPane;


// src/components/MainPane.js
import React, { useEffect, useState } from 'react';
import { Grid, TextField, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TaskCard from './TaskCard';
import SnackbarComponent from './Snackbar';
import { fetchTasks, deleteTask, updateTask, completeTask } from '../services/api';

const MainPane = ({ tasks, showCompletedTasks, setTasks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      setTasks(response.data);
    } catch (error) {
      showSnackbar('Failed to load tasks', 'error');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter(task => task._id !== id));
      showSnackbar('Task deleted successfully', 'success');
    } catch (error) {
      showSnackbar('Failed to delete task', 'error');
    }
  };

  const handleEditTask = async (id, updatedTask) => {
    try {
      await updateTask(id, updatedTask);
      loadTasks(); // Optionally, you can update the state without reloading
      showSnackbar('Task updated successfully', 'success');
    } catch (error) {
      showSnackbar('Failed to update task', 'error');
    }
  };

  const handleCompleteTask = async (id) => {
    const task = tasks.find(task => task._id === id);
    if (!task) return; // Return if task is not found

    try {
      if (task.completed) {
        // Task is currently completed, so we need to mark it as uncompleted
        await completeTask(id); // Assuming completeTask API handles toggling
        showSnackbar('Task marked as uncompleted', 'success');
      } else {
        // Task is currently uncompleted, so we mark it as completed
        await completeTask(id);
        showSnackbar('Task marked as completed', 'success');
      }
      loadTasks(); // Reload tasks to reflect changes
    } catch (error) {
      showSnackbar('Failed to toggle task completion', 'error');
    }
  };

//   const handleCompleteTask = async (id) => {
//     try {
//       await completeTask(id);
//       loadTasks();
//       showSnackbar('Task marked as completed', 'success');
//     } catch (error) {
//       showSnackbar('Failed to mark task as completed', 'error');
//     }
//   };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter(task =>
    task.title && task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Determine displayed tasks based on showCompletedTasks value
  const displayedTasks = showCompletedTasks === null 
    ? filteredTasks // Show all tasks
    : showCompletedTasks 
    ? filteredTasks.filter(task => task.completed) // Show completed tasks
    : filteredTasks.filter(task => !task.completed); // Show uncompleted tasks

  return (
    <div style={{ padding: '20px' }}>
      {/* Search Bar */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          label="Search Tasks"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px', width: '320px' }} // Adjust right margin
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      {/* Tasks Heading */}
      <Typography variant="h5">
        {showCompletedTasks === null 
          ? 'All Tasks' 
          : showCompletedTasks 
          ? 'Completed Tasks' 
          : 'Uncompleted Tasks'} 
        ({displayedTasks.length})
      </Typography>

      {/* Task Cards */}
      <Grid container spacing={0}>  {/* Set spacing to 0 */}
        {displayedTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task._id}>
            <TaskCard
              task={task}
              onEdit={() => handleEditTask(task._id, { title: prompt('Edit Task', task.title) })}
              onDelete={() => handleDeleteTask(task._id)}
              onComplete={() => handleCompleteTask(task._id)}
            />
          </Grid>
        ))}
      </Grid>

      <SnackbarComponent
        open={snackbarOpen}
        message={snackbarMessage}
        handleClose={handleSnackbarClose}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default MainPane;
