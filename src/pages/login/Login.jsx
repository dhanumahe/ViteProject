


// import React, { useRef, useState } from 'react';
// import { Box, TextField, Button, Typography, FormControlLabel, Checkbox, InputAdornment } from '@mui/material';
// import { AccountCircle, Lock } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../../assets/color1.jpg';

// function Login() {
//     const name = useRef(null);
//     const password = useRef(null);
//     const [rememberMe, setRememberMe] = useState(false);
//     const [error, setError] = useState({ name: false, password: false });

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (name.current.value && password.current.value) {
//             console.log(name.current.value);
//             console.log(password.current.value);
//             console.log(`Remember Me: ${rememberMe}`);
//         } else {
//             if (!name.current.value) {
//                 setError((prev) => ({ ...prev, name: true }));
//             }
//             if (!password.current.value) {
//                 setError((prev) => ({ ...prev, password: true }));
//             }
//             console.log("Error");
//         }
//     };

//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 minHeight: '100vh',
//                 backgroundImage: `url(${backgroundImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             }}
//         >
//             <Box
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     flexDirection: 'column',
//                     width: '60%',
//                     maxWidth: '300px',
//                     p: 2,
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//                     border: '2px solid rgba(255, 255, 255, 0.5)',
//                     boxShadow: 3,
//                     borderRadius: 2,
//                 }}
//             >
//                 <Typography variant="h4" sx={{ mb: 2, color: 'black' }}>
//                     Login
//                 </Typography>
//                 <Box
//                     component="form"
//                     onSubmit={handleSubmit}
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         width: '100%',
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <Box sx={{ mb: 2, width: '100%' }}>
//                         <TextField
//                             inputRef={name}
//                             id="name"
//                             label="Name"
//                             variant="outlined"
//                             fullWidth
//                             InputLabelProps={{
//                                 style: { color: 'black' },
//                             }}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <AccountCircle style={{ color: 'black' }} />
//                                     </InputAdornment>
//                                 ),
//                                 style: {
//                                     color: 'black',
//                                     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                                     borderColor: 'black',
//                                 },
//                             }}
//                         />
//                         <Typography color={error.name ? "red" : "transparent"} fontSize="0.75rem">
//                             Fill the name
//                         </Typography>
//                     </Box>
//                     <Box sx={{ mb: 2, width: '100%' }}>
//                         <TextField
//                             inputRef={password}
//                             id="password"
//                             type="password"
//                             label="Password"
//                             variant="outlined"
//                             fullWidth
//                             InputLabelProps={{
//                                 style: { color: 'black' },
//                             }}
//                             InputProps={{
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         <Lock style={{ color: 'black' }} />
//                                     </InputAdornment>
//                                 ),
//                                 style: {
//                                     color: 'black',
//                                     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                                     borderColor: 'black',
//                                 },
//                             }}
//                         />
//                         <Typography color={error.password ? "red" : "transparent"} fontSize="0.75rem">
//                             Fill the password
//                         </Typography>
//                     </Box>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 checked={rememberMe}
//                                 onChange={(e) => setRememberMe(e.target.checked)}
//                                 name="rememberMe"
//                                 color="primary"
//                             />
//                         }
//                         label="Remember Me"
//                         sx={{ color: 'black' }}
//                     />
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' }, width: '150px', mt: 2 }}
//                     >
//                         Submit
//                     </Button>
//                     <Typography sx={{ mt: 2, color: 'black' }}>
//                         Don't have an account? <Link to='/register' style={{ color: 'lightblue' }}>Register here</Link>
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default Login;



import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography, FormControlLabel, Checkbox, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundImage from '../../assets/color1.jpg';

function Login() {
    const name = useRef(null);
    const password = useRef(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState({ name: false, password: false });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.current.value && password.current.value) {
            console.log(name.current.value);
            console.log(password.current.value);
            console.log(`Remember Me: ${rememberMe}`);
            navigate('/events'); // Navigate to Events page
        } else {
            if (!name.current.value) {
                setError((prev) => ({ ...prev, name: true }));
            }
            if (!password.current.value) {
                setError((prev) => ({ ...prev, password: true }));
            }
            console.log("Error");
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
                    width: '60%',
                    maxWidth: '300px',
                    p: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: 3,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" sx={{ mb: 2, color: 'black' }}>
                    Login
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ mb: 2, width: '100%' }}>
                        <TextField
                            inputRef={name}
                            id="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                style: { color: 'black' },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle style={{ color: 'black' }} />
                                    </InputAdornment>
                                ),
                                style: {
                                    color: 'black',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    borderColor: 'black',
                                },
                            }}
                        />
                        <Typography color={error.name ? "red" : "transparent"} fontSize="0.75rem">
                            Fill the name
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2, width: '100%' }}>
                        <TextField
                            inputRef={password}
                            id="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                style: { color: 'black' },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock style={{ color: 'black' }} />
                                    </InputAdornment>
                                ),
                                style: {
                                    color: 'black',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    borderColor: 'black',
                                },
                            }}
                        />
                        <Typography color={error.password ? "red" : "transparent"} fontSize="0.75rem">
                            Fill the password
                        </Typography>
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                name="rememberMe"
                                color="primary"
                            />
                        }
                        label="Remember Me"
                        sx={{ color: 'black' }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'darkgreen' }, width: '150px', mt: 2 }}
                    >
                        Submit
                    </Button>
                    <Typography sx={{ mt: 2, color: 'black' }}>
                        Don't have an account? <Link to='/register' style={{ color: 'lightblue' }}>Register here</Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
