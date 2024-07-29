// import React from 'react';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Admin = () => {
//   const handleAdminLogin = (event) => {
//     event.preventDefault();
//     // Add your admin login logic here
//   };

//   return (
//     <Box 
//       display="flex" 
//       flexDirection="column" 
//       justifyContent="center" 
//       alignItems="center" 
//       minHeight="100vh"
//       style={{ 
//         backgroundImage: 'url(https://res.cloudinary.com/simplotel/image/upload/x_0,y_100,w_1920,h_1080,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/jenneys-residency-coimbatore/diamond_banquet_hall_with_seating_arrangement_for_conference_and_weddings4_wq7t1z)', 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center',
//         width: '100vw',
//         height: '100vh',
//       }}
//     >
//       <Container 
//         maxWidth="sm" 
//         style={{ 
//           backgroundColor: 'rgba(255, 255, 255, 0.9)', 
//           padding: '32px', 
//           borderRadius: '8px',
//           display: 'flex', 
//           flexDirection: 'column', 
//           justifyContent: 'center', 
//           alignItems: 'center'
//         }}
//       >
//         <Typography variant="h4" gutterBottom align="center">
//           Admin Sign In
//         </Typography>
//         <form onSubmit={handleAdminLogin} style={{ width: '100%' }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="adminEmail"
//             label="Admin Email"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="adminPassword"
//             autoComplete="current-password"
//           />
//           <Button
//             component={Link}
//             to="/admin-dashboard"
//             fullWidth
//             variant="contained"
//             color="primary"
//             style={{ margin: '16px 0' }}
//           >
//             Sign In
//           </Button>
//         </form>
//       </Container>
//     </Box>
//   );
// };

// export default Admin;

import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/color1.jpg'; // Adjust the path as needed

const Admin = () => {
  const handleAdminLogin = (event) => {
    event.preventDefault();
    // Add your admin login logic here
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Container 
        maxWidth="sm" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          padding: '32px', 
          borderRadius: '8px',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Admin Sign In
        </Typography>
        <form onSubmit={handleAdminLogin} style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adminEmail"
            label="Admin Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="adminPassword"
            autoComplete="current-password"
          />
          <Button
            component={Link}
            to="/admin-dashboard"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '16px 0' }}
          >
            Sign In
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Admin;
