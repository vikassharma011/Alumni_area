import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" py={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Important Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="#" target="_blank" color="inherit">
                  <i className="fas fa-angle-right"></i> link add
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" color="inherit">
                  <i className="fas fa-angle-right"></i> link add
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" color="inherit">
                  <i className="fas fa-angle-right"></i> link add
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Quick Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <Link href="/" color="inherit">
                  <i className="fas fa-angle-right"></i> Home
                </Link>
              </li>
              <li>
                <Link href="" color="inherit">
                  <i className="fas fa-angle-right"></i> Alumni Registration
                </Link>
              </li>
              <li>
                <Link href="" color="inherit">
                  <i className="fas fa-angle-right"></i> News and Events
                </Link>
              </li>
              <li>
                <Link href="" color="inherit">
                  <i className="fas fa-angle-right"></i> Report An Error
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Contact</Typography>
            <Typography>
              alumni please signup <br />
              
              <Link href="vikassharma9669@gmail.com" color="inherit">
                <div style={{ marginTop: '10px' }}>
                  <i className="fas fa-envelope"></i> 
                </div>
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Social</Typography>
            <Box display="flex" justifyContent="space-between" width="80px">
              <Link href="#" target="_blank" color="inherit">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link href="#" color="inherit">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" color="inherit">
                <i className="fab fa-instagram"></i>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" align="center">
            lorem
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
