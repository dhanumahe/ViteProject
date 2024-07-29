import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function DashBoard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Box sx={{ flex: '1 0 auto', padding: '20px' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Link to="/admin" style={{ marginRight: '20px' }}>Admin</Link>
          <Link to="/user">User</Link>
        </Box>
        <Outlet /> {/* Renders the current route's component */}
      </Box>
      
    </Box>
  );
}

export default DashBoard;
