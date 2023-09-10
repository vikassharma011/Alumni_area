import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
//import Typography from '@material-ui/core/Typography';
//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
//import Avatar from '@material-ui/core/Avatar';
import { Typography,Grid,Container,Paper,Avatar,styled } from '@mui/material';

const backgroundImageUrl = ''; // Replace with your background image URL
const profileImageUrl = 'your-profile-image-url.jpg'; // Replace with your profile image URL

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${backgroundImageUrl})`, // Set background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  },
  header: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  content: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const AboutMePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" className={classes.header}>
          About Me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Avatar alt="Your Name" src={profileImageUrl} className={classes.avatar} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.content}>
              <Typography variant="h6" className={classes.content}>
                Personal Information
              </Typography>
              <Typography variant="body1">
                Name: Your Name
              </Typography>
              <Typography variant="body1">
                Date of Birth: January 1, 1990
              </Typography>
              <Typography variant="body1">
                Address: 123 Main St, City, Country
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.content}>
              <Typography variant="h6" className={classes.content}>
                About Me
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
                velit sit amet justo feugiat luctus. Nullam tristique metus ac
                urna tincidunt bibendum. Aenean in augue vel orci cursus
                ullamcorper.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutMePage;
