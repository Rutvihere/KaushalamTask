// // src/components/TaskCard.js
// import React from 'react';
// import { Card, CardContent, Typography, IconButton } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

// const TaskCard = ({ task, onEdit, onDelete, onComplete }) => {
//   return (
//     <Card
//       variant="outlined"
//       style={{
//         backgroundColor: task.completed ? '#e0f7fa' : '#fff',
//         margin: '10px',
//         cursor: 'pointer',
//       }}
//     >
//       <CardContent>
//         <Typography variant="h6">{task.title}</Typography>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
//           <IconButton onClick={onEdit}>
//             <EditIcon />
//           </IconButton>
//           <IconButton onClick={onDelete}>
//             <DeleteIcon />
//           </IconButton>
//           <IconButton onClick={onComplete}>
//             {task.completed ? <StarIcon color="primary" /> : <StarBorderIcon />}
//           </IconButton>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default TaskCard;

// src/components/TaskCard.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TaskCard = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: task.completed ? '#e0f7fa' : '#fff',
        margin:'10px',
        cursor: 'pointer',
        width: '320px',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={onComplete}>
          {task.completed ? <StarIcon color="primary" /> : <StarBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

export default TaskCard;
