// // src/pages/HomePage.js
// import React, { useState } from 'react';
// import LeftPane from '../components/LeftPane';
// import MainPane from '../components/MainPane';
// import { addTask } from '../services/api';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state

//   const handleAddTask = async (description) => {
//     try {
//       const newTask = await addTask({ title: description });
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
//     } catch (error) {
//       console.error('Failed to add task:', error);
//     }
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <LeftPane onAddTask={handleAddTask} />
//       <MainPane tasks={tasks} setTasks={setTasks} /> {/* Pass tasks and setTasks */}
//     </div>
//   );
// };

// export default HomePage;


// // src/pages/HomePage.js
// import React, { useState } from 'react';
// import LeftPane from '../components/LeftPane';
// import MainPane from '../components/MainPane';
// import { addTask } from '../services/api';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state
//   const [showCompletedTasks, setShowCompletedTasks] = useState(false);

//   const handleAddTask = async (description) => {
//     try {
//       const newTask = await addTask({ title: description });
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
//     } catch (error) {
//       console.error('Failed to add task:', error);
//     }
//   };

//   const handleShowAllTasks = () => {
//     setShowCompletedTasks(false);
//   };

//   const handleShowCompletedTasks = () => {
//     setShowCompletedTasks(true);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <LeftPane
//         onAddTask={handleAddTask}
//         onShowAllTasks={handleShowAllTasks}
//         onShowCompletedTasks={handleShowCompletedTasks}
//       />
//       <MainPane tasks={tasks} setTasks={setTasks} showCompletedTasks={showCompletedTasks} />
//     </div>
//   );
// };

// export default HomePage;


// // src/pages/HomePage.js
// import React, { useState } from 'react';
// import LeftPane from '../components/LeftPane';
// import MainPane from '../components/MainPane';
// import { addTask } from '../services/api';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state
//   const [showCompletedTasks, setShowCompletedTasks] = useState(false);

//   const handleAddTask = async (description) => {
//     try {
//       const newTask = await addTask({ title: description });
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
//     } catch (error) {
//       console.error('Failed to add task:', error);
//     }
//   };

//   const handleShowAllTasks = () => {
//     setShowCompletedTasks(false);
//   };

//   const handleShowCompletedTasks = () => {
//     setShowCompletedTasks(true);
//   };

//   const handleShowUncompletedTasks = () => {
//     setShowCompletedTasks(false); // This can also toggle based on how you want to implement it
//     // Add logic to show uncompleted tasks if needed in MainPane
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <LeftPane
//         onAddTask={handleAddTask}
//         onShowAllTasks={handleShowAllTasks}
//         onShowCompletedTasks={handleShowCompletedTasks}
//         onShowUncompletedTasks={handleShowUncompletedTasks} // Pass new handler
//       />
//       <MainPane
//         tasks={tasks}
//         showCompletedTasks={showCompletedTasks}
//         setTasks={setTasks}
//       /> {/* Pass tasks and setTasks */}
//     </div>
//   );
// };

// export default HomePage;

// // src/pages/HomePage.js
// import React, { useState } from 'react';
// import LeftPane from '../components/LeftPane';
// import MainPane from '../components/MainPane';
// import { addTask } from '../services/api';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state
//   const [showCompletedTasks, setShowCompletedTasks] = useState(null); // Changed to null to indicate all tasks

//   const handleAddTask = async (description) => {
//     try {
//       const newTask = await addTask({ title: description });
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
//     } catch (error) {
//       console.error('Failed to add task:', error);
//     }
//   };

//   const handleShowAllTasks = () => {
//     setShowCompletedTasks(null); // Set to null to show all tasks
//   };

//   const handleShowCompletedTasks = () => {
//     setShowCompletedTasks(true); // Show completed tasks
//   };

//   const handleShowUncompletedTasks = () => {
//     setShowCompletedTasks(false); // Show uncompleted tasks
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <LeftPane
//         onAddTask={handleAddTask}
//         onShowAllTasks={handleShowAllTasks}
//         onShowCompletedTasks={handleShowCompletedTasks}
//         onShowUncompletedTasks={handleShowUncompletedTasks}
//       />
//       <MainPane
//         tasks={tasks}
//         showCompletedTasks={showCompletedTasks} // Pass state directly
//         setTasks={setTasks}
//       />
//     </div>
//   );
// };

// export default HomePage;


// // src/pages/HomePage.js
// import React, { useState, useEffect } from 'react';
// import LeftPane from '../components/LeftPane';
// import MainPane from '../components/MainPane';
// import Signup from '../components/Signup';
// import Login from '../components/Login';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
// import { addTask } from '../services/api';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state
//   const [token, setToken] = useState(null);
//   const [username, setUsername] = useState('');
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Load the token and username from localStorage on component mount
//   useEffect(() => {
//     const savedToken = localStorage.getItem('authToken');
//     const savedUsername = localStorage.getItem('username');
//     if (savedToken) {
//       setToken(savedToken);
//       setUsername(savedUsername || '');
//       navigate('/alltasks'); // Redirect to tasks page
//     }
//   }, [navigate]);

//   const handleAddTask = async (description) => {
//     try {
//       const newTask = await addTask({ title: description }); // Adjust the task format as needed
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
//     } catch (error) {
//       console.error('Failed to add task:', error);
//     }
//   };

//   const handleLogin = (token, username) => {
//     setToken(token);
//     setUsername(username);
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('username', username);
//     setShowLogin(false);
//     setShowSignup(false);
//     navigate('/'); // Redirect to tasks page
//   };

//   const handleSignup = () => {
//     setShowLogin(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('username');
//     setToken(null);
//     setUsername('');
//   };

//   return (
//     <div>
//       {/* Header */}
//       {token && (
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               PlanIt Task Manager
//             </Typography>
//             <Box>
//               <Typography variant="body1" style={{ marginRight: '20px', display: 'inline' }}>
//                 Hi, {username}
//               </Typography>
//               <Button color="inherit" onClick={handleLogout}>Logout</Button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       )}
//       {!token ? (
//         <div>
//           {!showLogin && !showSignup && (
//             <>
//               <Button onClick={() => setShowSignup(true)}>Sign Up</Button>
//               <Button onClick={() => setShowLogin(true)}>Login</Button>
//             </>
//           )}
//           {showSignup && <Signup onSignup={handleSignup} />}
//           {showLogin && <Login onLogin={handleLogin} />}
//         </div>
//       ) : (
//         <div style={{ display: 'flex' }}>
//           <LeftPane
//             onAddTask={handleAddTask}
//             // If you have filter methods, you can add them here
//           />
//           <MainPane
//             tasks={tasks}
//             // Pass additional props to MainPane if needed
//             setTasks={setTasks}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;


// // src/pages/HomePage.js
// import React, { useState, useEffect } from 'react';
// import LeftPane from '../components/LeftPane';
// import MainPane from '../components/MainPane';
// import { AppBar, Toolbar, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
// import { addTask } from '../services/api';

// const HomePage = () => {
//   const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state
//   const [token, setToken] = useState(null);
//   const [username, setUsername] = useState('');
//   const [showCompletedTasks, setShowCompletedTasks] = useState(null); // New state for task filtering
//   const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Load the token and username from localStorage on component mount
//   useEffect(() => {
//     const savedToken = localStorage.getItem('authToken');
//     const savedUsername = localStorage.getItem('username');
//     if (savedToken) {
//       setToken(savedToken);
//       setUsername(savedUsername || '');
//       navigate('/alltasks'); 
//     }
//   }, [navigate]);

//   const handleAddTask = async (description) => {
//     try {
//       const newTask = await addTask({ title: description }); // Adjust the task format as needed
//       setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
//     } catch (error) {
//       console.error('Failed to add task:', error);
//     }
//   };

//    // Open the logout confirmation dialog
//    const handleLogoutClick = () => {
//     setOpenLogoutDialog(true);
//   };

//   // Confirm logout
//   const handleLogoutConfirm = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('username');
//     setToken(null);
//     setUsername('');
//     setOpenLogoutDialog(false); // Close the dialog
//     navigate('/signup'); // Redirect to signup page
//   };

//   // Cancel logout
//   const handleLogoutCancel = () => {
//     setOpenLogoutDialog(false); // Close the dialog
//   };


// //   const handleLogout = () => {
// //     localStorage.removeItem('authToken');
// //     localStorage.removeItem('username');
// //     setToken(null);
// //     setUsername('');
// //   };

//   // New functions to change task visibility
//   const showAllTasks = () => {
//     setShowCompletedTasks(null); // Show all tasks
//   };

//   const showCompletedTasksOnly = () => {
//     setShowCompletedTasks(true); // Show only completed tasks
//   };

//   const showUncompletedTasksOnly = () => {
//     setShowCompletedTasks(false); // Show only uncompleted tasks
//   };

//   return (
//     <div>
//       {/* Header */}
//       {token && (
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" style={{ flexGrow: 1 }}>
//               PlanIt - Your Personal Task Manager
//             </Typography>
//             <Box>
//               <Typography variant="body1" style={{ marginRight: '20px', display: 'inline' }}>
//                 Hi, {username}
//               </Typography>
//               <Button color="inherit" onClick={handleLogoutClick}>Logout</Button>
//             </Box>
//           </Toolbar>
//         </AppBar>
//       )}
      
//       : (
//         <div style={{ display: 'flex' }}>
//           <LeftPane
//             onAddTask={handleAddTask}
//             onShowAllTasks={showAllTasks} // Pass showAllTasks function
//             onShowCompletedTasks={showCompletedTasksOnly} // Pass showCompletedTasksOnly function
//             onShowUncompletedTasks={showUncompletedTasksOnly} // Pass showUncompletedTasksOnly function
//           />
//           <MainPane
//             tasks={tasks}
//             showCompletedTasks={showCompletedTasks} // Pass the filtering state
//             setTasks={setTasks}
//           />
//         </div>
//       )
//        <Dialog open={openLogoutDialog} onClose={handleLogoutCancel}>
//         <DialogTitle>Logout Confirmation</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to logout?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleLogoutCancel} color="primary">No</Button>
//           <Button onClick={handleLogoutConfirm} color="primary">Yes</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default HomePage;


// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import LeftPane from '../components/LeftPane';
import MainPane from '../components/MainPane';
import { AppBar, Toolbar, Typography, Button, Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
import { addTask } from '../services/api';

const HomePage = () => {
  const [tasks, setTasks] = useState([]); // Maintain tasks in HomePage state
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState('');
  const [showCompletedTasks, setShowCompletedTasks] = useState(null); // New state for task filtering
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Load the token and username from localStorage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUsername = localStorage.getItem('username');
    if (savedToken) {
      setToken(savedToken);
      setUsername(savedUsername || '');
    } else {
      navigate('/alltasks'); // Redirect to signup if no token found
    }
  }, [navigate]);

  const handleAddTask = async (description) => {
    try {
      const newTask = await addTask({ title: description }); // Adjust the task format as needed
      setTasks((prevTasks) => [...prevTasks, newTask]); // Add new task to state
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  // Open the logout confirmation dialog
  const handleLogoutClick = () => {
    setOpenLogoutDialog(true);
  };

  // Confirm logout
  const handleLogoutConfirm = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setToken(null);
    setUsername('');
    setOpenLogoutDialog(false); // Close the dialog
    navigate('/signup'); // Redirect to signup page
  };

  // Cancel logout
  const handleLogoutCancel = () => {
    setOpenLogoutDialog(false); // Close the dialog
  };

  // New functions to change task visibility
  const showAllTasks = () => {
    setShowCompletedTasks(null); // Show all tasks
  };

  const showCompletedTasksOnly = () => {
    setShowCompletedTasks(true); // Show only completed tasks
  };

  const showUncompletedTasksOnly = () => {
    setShowCompletedTasks(false); // Show only uncompleted tasks
  };

  return (
    <div>
      {/* Header */}
      {token && (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              PlanIt - Your Personal Task Manager
            </Typography>
            <Box>
              <Typography variant="body1" style={{ marginRight: '20px', display: 'inline' }}>
                Hi, {username}
              </Typography>
              <Button color="inherit" onClick={handleLogoutClick}>Logout</Button>
            </Box>
          </Toolbar>
        </AppBar>
      )}
      
      <div style={{ display: 'flex' }}>
        <LeftPane
          onAddTask={handleAddTask}
          onShowAllTasks={showAllTasks} // Pass showAllTasks function
          onShowCompletedTasks={showCompletedTasksOnly} // Pass showCompletedTasksOnly function
          onShowUncompletedTasks={showUncompletedTasksOnly} // Pass showUncompletedTasksOnly function
        />
        <MainPane
          tasks={tasks}
          showCompletedTasks={showCompletedTasks} // Pass the filtering state
          setTasks={setTasks}
        />
      </div>
      
      <Dialog open={openLogoutDialog} onClose={handleLogoutCancel}>
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">No</Button>
          <Button onClick={handleLogoutConfirm} color="primary">Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HomePage;
