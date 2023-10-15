import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" py={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Important Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
              <li>
                <Link href="#" target="_blank" color="inherit">
                  Link 1
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" color="inherit">
                  Link 2
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" color="inherit">
                  Link 3
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Quick Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
              <li>
                <Link href="/" color="inherit">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/registration" color="inherit">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/events" color="inherit">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" color="inherit">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Contact</Typography>
            <Typography>
              Email: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
            </Typography>
            <Typography>
              Phone: <Link href="tel:+123456789" color="inherit">+1 (234) 567-89</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Social</Typography>
            <IconButton href="#" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            &copy; 2023 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
