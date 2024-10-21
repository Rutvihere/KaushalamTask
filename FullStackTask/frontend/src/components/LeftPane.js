// // src/components/LeftPane.js
// import React from 'react';
// import { Typography, Button } from '@mui/material';

// const LeftPane = ({ onAddTask }) => {
//   return (
//     <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '200px' }}>
//       <Typography variant="h4">PlanIt</Typography>
//       <Button variant="contained" color="primary" onClick={onAddTask} style={{ marginTop: '20px' }}>
//         Add New Task
//       </Button>
//       <Typography variant="h6" style={{ marginTop: '20px' }}>
//         All Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }}>
//         Completed Tasks
//       </Typography>
//     </div>
//   );
// };

// export default LeftPane;

// // src/components/LeftPane.js
// import React, { useState } from 'react';
// import { Typography, Button } from '@mui/material';
// import TaskForm from './TaskForm';

// const LeftPane = ({ onAddTask }) => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '250px' }}>
//       <Typography variant="h4">PlanIt</Typography>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
//         Add New Task
//       </Button>

//       {/* TaskForm component for adding new tasks */}
//       <TaskForm open={open} onClose={handleClose} onAddTask={onAddTask} />

//       <Typography variant="h6" style={{ marginTop: '20px' }}>
//         All Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }}>
//         Completed Tasks
//       </Typography>
//     </div>
//   );
// };

// export default LeftPane;


// // src/components/LeftPane.js
// import React, { useState } from 'react';
// import { Typography, Button } from '@mui/material';
// import TaskForm from './TaskForm';

// const LeftPane = ({ onAddTask }) => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '250px' }}>
//       <Typography variant="h4">PlanIt</Typography>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
//         Add New Task
//       </Button>

//       {/* TaskForm component for adding new tasks */}
//       <TaskForm open={open} onClose={handleClose} onAddTask={onAddTask} />

//       <Typography variant="h6" style={{ marginTop: '20px' }}>
//         All Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }}>
//         Completed Tasks
//       </Typography>
//     </div>
//   );
// };

// export default LeftPane;


// // src/components/LeftPane.js
// import React, { useState } from 'react';
// import { Typography, Button } from '@mui/material';
// import TaskForm from './TaskForm';
// import MainPane from './MainPane'; // Adjust if needed

// const LeftPane = ({ onAddTask }) => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '250px' }}>
//       <Typography variant="h4">PlanIt</Typography>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
//         Add New Task
//       </Button>

//       {/* TaskForm component for adding new tasks */}
//       <TaskForm open={open} onClose={handleClose} onAddTask={onAddTask} />

//       <Typography variant="h6" style={{ marginTop: '20px' }}>
//         All Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }}>
//         Completed Tasks
//       </Typography>
//     </div>
//   );
// };

// export default LeftPane;



// src/components/LeftPane.js
// import React, { useState } from 'react';
// import { Typography, Button } from '@mui/material';
// import TaskForm from './TaskForm';

// const LeftPane = ({ onAddTask, onShowAllTasks, onShowCompletedTasks }) => {
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '250px' }}>
//       <Typography variant="h4">PlanIt</Typography>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
//         Add New Task
//       </Button>

//       {/* TaskForm component for adding new tasks */}
//       <TaskForm open={open} onClose={handleClose} onAddTask={onAddTask} />

//       <Typography variant="h6" style={{ marginTop: '20px' }} onClick={onShowAllTasks}>
//         All Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }} onClick={onShowCompletedTasks}>
//         Completed Tasks
//       </Typography>
//     </div>
//   );
// };

// export default LeftPane;


// // src/components/LeftPane.js
// import React, { useState } from 'react';
// import { Typography, Button } from '@mui/material';
// import TaskForm from './TaskForm';

// const LeftPane = ({ onAddTask, onShowAllTasks, onShowCompletedTasks, onShowUncompletedTasks }) => { // Add onShowUncompletedTasks prop
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '250px' }}>
//       <Typography variant="h4">PlanIt</Typography>
//       <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
//         Add New Task
//       </Button>

//       {/* TaskForm component for adding new tasks */}
//       <TaskForm open={open} onClose={handleClose} onAddTask={onAddTask} />

//       <Typography variant="h6" style={{ marginTop: '20px' }} onClick={onShowAllTasks}>
//         All Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }} onClick={onShowCompletedTasks}>
//         Completed Tasks
//       </Typography>
//       <Typography variant="h6" style={{ marginTop: '10px' }} onClick={onShowUncompletedTasks}>
//         Uncompleted Tasks
//       </Typography> {/* Added Uncompleted Tasks section */}
//     </div>
//   );
// };

// export default LeftPane;


// src/components/LeftPane.js
import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import TaskForm from './TaskForm';

const LeftPane = ({ onAddTask, onShowAllTasks, onShowCompletedTasks, onShowUncompletedTasks }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ padding: '20px', borderRight: '1px solid #ccc', width: '250px' }}>
      {/* <Typography variant="h4">PlanIt</Typography> */}
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ marginTop: '20px' }}>
        Add New Task
      </Button>

      {/* TaskForm component for adding new tasks */}
      <TaskForm open={open} onClose={handleClose} onAddTask={onAddTask} />

      <Typography 
        variant="h6" 
        style={{ marginTop: '20px', cursor: 'pointer' }} 
        onClick={onShowAllTasks}
      >
        All Tasks
      </Typography>
      <Typography 
        variant="h6" 
        style={{ marginTop: '10px', cursor: 'pointer' }} 
        onClick={onShowCompletedTasks}
      >
        Completed Tasks
      </Typography>
      <Typography 
        variant="h6" 
        style={{ marginTop: '10px', cursor: 'pointer' }} 
        onClick={onShowUncompletedTasks}
      >
        Uncompleted Tasks
      </Typography>
    </div>
  );
};

export default LeftPane;
