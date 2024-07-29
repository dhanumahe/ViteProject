import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';
import backgroundImage from '../../assets/color1.jpg';

function Register() {
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const phoneNumber = useRef(null);
  const address = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    phoneNumber: false,
    address: false,
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    phoneNumber.current.value = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!fullName.current.value) {
      setError((prev) => ({ ...prev, fullName: true }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, fullName: false }));
    }

    if (!email.current.value) {
      setError((prev) => ({ ...prev, email: true }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }

    if (!password.current.value || password.current.value !== confirmPassword.current.value) {
      setError((prev) => ({ ...prev, password: true, confirmPassword: true }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, password: false, confirmPassword: false }));
    }

    if (!phoneNumber.current.value) {
      setError((prev) => ({ ...prev, phoneNumber: true }));
      isValid = false;
    } else {
      setError((prev) => ({ ...prev, phoneNumber: false }));
    }

    if (isValid) {
      console.log(fullName.current.value);
      console.log(email.current.value);
      console.log(password.current.value);
      console.log(confirmPassword.current.value);
      console.log(phoneNumber.current.value);
      console.log(address.current.value);

      // Additional logic for registering user goes here
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          p: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '300px',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            bgcolor: 'rgba(255, 255, 255, 0.8)',
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Register
          </Typography>
          <Box sx={{ mb: 2, width: '100%' }}>
            <TextField
              inputRef={fullName}
              id="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            {error.fullName && (
              <Typography color="red" fontSize="0.75rem">
                Fill in your full name
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2, width: '100%' }}>
            <TextField
              inputRef={email}
              id="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            {error.email && (
              <Typography color="red" fontSize="0.75rem">
                Fill in your Email address
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2, width: '100%' }}>
            <TextField
              inputRef={password}
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                ),
                // endAdornment: (
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {showPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // ),
              }}
            />
          </Box>
          <Box sx={{ mb: 2, width: '100%' }}>
            <TextField
              inputRef={confirmPassword}
              id="confirmPassword"
              label="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
               
                  </InputAdornment>
                ),
                // endAdornment: (
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle confirm password visibility"
                //       onClick={handleClickShowConfirmPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >
                //       {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                //     </IconButton>
                //   </InputAdornment>
                // ),
              }}
            />
            {error.password && (
              <Typography color="red" fontSize="0.75rem">
                Passwords do not match
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2, width: '100%' }}>
            <TextField
              inputRef={phoneNumber}
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              fullWidth
              onChange={handlePhoneNumberChange}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            {error.phoneNumber && (
              <Typography color="red" fontSize="0.75rem">
                Fill in your phone number
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 2, width: '100%' }}>
            <TextField
              inputRef={address}
              id="address"
              label="Address"
              variant="outlined"
              fullWidth
            />
            {error.address && (
              <Typography color="red" fontSize="0.75rem">
                Fill in your Address
              </Typography>
            )}
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' }, width: '150px' }}
          >
            Register
          </Button>
          <Typography sx={{ mt: 2 }}>
            Already have an account? <Link to='/login'>Login here</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
