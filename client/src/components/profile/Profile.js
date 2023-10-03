import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography , styled } from '@mui/material';
//import styled from 'styled-components';

const StyledContainer = styled(Grid)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const Profile = () => {
  const initialProfile = {
    name: 'John Doe',
    email: 'john@example.com',
    collegeName: 'XYZ College',
    city: 'New York',
    address: '123 Main Street',
    passingYear: '2020',
    degree: 'Bachelor of Science',
  };

  const [profile, setProfile] = useState(initialProfile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update the profile here
    console.log('Updated Profile:', profile);
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit}>
        <StyledPaper elevation={3}>
          <Typography variant="h5">Update Profile</Typography>
          <TextField
            label="Name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="College Name"
            name="collegeName"
            value={profile.collegeName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City"
            name="city"
            value={profile.city}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Passing Year"
            name="passingYear"
            value={profile.passingYear}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Degree"
            name="degree"
            value={profile.degree}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save
          </Button>
        </StyledPaper>
      </form>
    </StyledContainer>
  );
};

export default Profile;
