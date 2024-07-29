import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import backgroundImage from '../../assets/color1.jpg'; // Import the background image
import SendIcon from '@mui/icons-material/Send'; // Import the icon for the button
import PersonIcon from '@mui/icons-material/Person'; // Import the icon for name field
import EmailIcon from '@mui/icons-material/Email'; // Import the icon for email field
import MessageIcon from '@mui/icons-material/Message'; // Import the icon for message field

function Contact() {
  const name = useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const [error, setError] = useState({ name: false, email: false, message: false });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.current.value && email.current.value && message.current.value) {
      console.log(name.current.value);
      console.log(email.current.value);
      console.log(message.current.value);

      // Additional logic for sending the message goes here

      // Show a popup message
      alert('Your message has been sent!');
    } else {
      if (!name.current.value) {
        setError((prev) => ({ ...prev, name: true }));
      }
      if (!email.current.value) {
        setError((prev) => ({ ...prev, email: true }));
      }
      if (!message.current.value) {
        setError((prev) => ({ ...prev, message: true }));
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          maxWidth: '500px', // Adjust the max-width as needed
          p: 3, // Padding around the form
          border: '1px solid #ccc', // Border around the form
          borderRadius: '8px', // Rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for a lifted effect
          backgroundColor: '#f9f9f9' // Background color for the form
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ mb: 2 }}>
          <TextField
            inputRef={name}
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
                </Box>
              ),
            }}
          />
          <Typography color={error.name ? "red" : "transparent"} fontSize="0.75rem">
            Please enter your name
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            inputRef={email}
            id="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                </Box>
              ),
            }}
          />
          <Typography color={error.email ? "red" : "transparent"} fontSize="0.75rem">
            Please enter a valid email address
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            inputRef={message}
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            InputProps={{
              startAdornment: (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MessageIcon sx={{ color: 'action.active', mr: 1 }} />
                </Box>
              ),
            }}
          />
          <Typography color={error.message ? "red" : "transparent"} fontSize="0.75rem">
            Please enter your message
          </Typography>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' }, width: '100px', mt: 2 }}
          startIcon={<SendIcon />} // Add icon to the button
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;


