import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import backgroundImage from '../../assets/color1.jpg'; // Import the background image

// Import hotel images
import color3 from '../../assets/color3.jpeg'
import color2 from '../../assets/color2.jpeg'
import color4 from '../../assets/color4.jpeg'

import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.webp';
import image7 from '../../assets/image7.webp';

function Home() {
  const [location, setLocation] = useState('');
  const [person, setPerson] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Sample data for hotels
  const hotels = [
    {
      name: 'Meeting Hall',
      address: 'Blissful Street, South Jakarta',
      visitors: 1219,
      image: color3,
      rating: 5
    },
    {
      name: 'Prdoduct Launch Hall',
      address: 'Serene Avenue, West Jakarta',
      visitors: 8912,
      image: color2,
      rating: 5
    },
    {
      name: 'Birthday Party Hall',
      address: 'Peaceful Lane, North Jakarta',
      visitors: 429,
      image: color4,
      rating: 5
    },
    {
      name: 'Wedding Hall',
      address: 'Tranquil Road, East Jakarta',
      visitors: 7612,
      image: image4,
      rating: 5
    },
    {
      name: 'Arebian Hotel',
      address: 'Santhur Road, India',
      visitors: 761,
      image: image5,
      rating: 5
    },
    {
      name: 'France Hotel',
      address: 'Tarkur, East',
      visitors: 612,
      image: image7,
      rating: 5
    }
  ];

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
      }}
    >
      <Navbar />
      <Box sx={{ flex: '1 0 auto', padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Welcome to Hallbooking System
        </Typography>
        <Box
          component="form"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <TextField
            label="Location"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ width: '200px' }}
          />
          <TextField
            label="Person"
            variant="outlined"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
            sx={{ width: '200px' }}
          />
          <TextField
            label="Check In"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            sx={{ width: '200px' }}
          />
          <TextField
            label="Check Out"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            sx={{ width: '200px' }}
          />
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ height: '56px' }}
            endIcon={<SearchIcon />}
          >
            Find
          </Button> */}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
         
          <TextField
            placeholder="Find specific hotel"
            variant="outlined"
            sx={{ width: '300px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                  {/* <Button
                    variant="outlined"
                    sx={{ ml: 1 }}
                    startIcon={<FilterListIcon />}
                  >
                    Filter
                  </Button> */}
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {hotels.map((hotel, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={hotel.image}
                  alt={hotel.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hotel.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hotel.visitors} Visitors
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${'★'.repeat(hotel.rating)} ${'☆'.repeat(5 - hotel.rating)}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Box component="img" src="path_to_map_image" alt="Map" sx={{ maxWidth: '600px', width: '100%' }} />
        </Box> */}
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
