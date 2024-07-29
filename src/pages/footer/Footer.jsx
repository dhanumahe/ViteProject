
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#212121',
        color: '#ffffff',
        padding: '2px 0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Hallbooking
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Built For Creatives
          </Typography>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Try Hallbooking Pro</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Find Inspiration</Link>
          {/* <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Get Hired</Link> */}
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Sell Creative Assets</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Sell Freelance Services</Link>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Find Talent
          </Typography>
          {/* <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Post a Job</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>All Featured Freelance Designers</Link> */}
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Graphic Designers</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Photographers</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Video Editors</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Web Designers</Link>
          {/* <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Illustrators</Link> */}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Majestic
          </Typography>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>About Hall booking</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Adobe Portfolio</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Download the App</Link>
          {/* <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Blog</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Careers</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Help Center</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>Contact Us</Link> */}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            Social
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <InstagramIcon sx={{ marginRight: '8px' }} /> Instagram
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <TwitterIcon sx={{ marginRight: '8px' }} /> Twitter
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <FacebookIcon sx={{ marginRight: '8px' }} /> Facebook
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <LinkedInIcon sx={{ marginRight: '8px' }} /> LinkedIn
            </Link>
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '20px auto 0',
          padding: '0 20px',
          borderTop: '1px solid #444',
          paddingTop: '20px',
        }}
      > 
         <Typography variant="body2" color="inherit">
          &copy; {new Date().getFullYear()} Adobe Inc. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="#" color="inherit" sx={{ marginRight: '16px' }}>English</Link>
          <Link href="#" color="inherit" sx={{ marginRight: '16px' }}>TOU</Link>
          <Link href="#" color="inherit" sx={{ marginRight: '16px' }}>Privacy</Link>
          <Link href="#" color="inherit" sx={{ marginRight: '16px' }}>Community</Link>
          <Link href="#" color="inherit" sx={{ marginRight: '16px' }}>Cookie Preferences</Link>
          <Link href="#" color="inherit">Do not sell or share my personal information</Link>
        </Box>
      </Box> */}
    </Box>
  );
}

export default Footer;