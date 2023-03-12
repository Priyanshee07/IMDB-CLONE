// import React from "react";

// import { Typography } from "@mui/material";

// export default function Home() {
//   return (
//     <div>
//       <Typography variant="h1" color="initial">
//         Home
//       </Typography>
//     </div>
//   );
//   }
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


 
const initialData = [
  { id: 1, firstName: 'Ayush', middleName: 'Prasad', lastName: 'Gupta', phoneNumber: '1234', email: 'xyz@gmail.com' },
  { id: 2, firstName: 'Priyanshee', middleName: '', lastName: 'Panjwani', phoneNumber: '5678', email: 'xyz@gmail.com' },
  { id: 3, firstName: 'Divya', middleName: '', lastName: 'G', phoneNumber: '9012', email: 'xyz@gmail.com' },
];
 
const UserTable= () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();
 
  // const handleEdit = (id) => {
  //   // Handle edit button click
    
    
  // };
 
  const handleDelete = (id) => {
    // Handle delete button click
    setData(data.filter((item) => item.id !== id));
  };
 
  return (
    <>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Middle Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.middleName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.phoneNumber}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => navigate('/AddUser')}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div >
    
    <Button
      style={{ margin: "10px" }}
      variant="contained"
      color="secondary"
      onClick={() => navigate('/AddUser')}
    >
      Add  User
    </Button>
  </div>
  </>
  );
};
 
export default UserTable;
