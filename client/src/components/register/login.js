import React from 'react'
import {Box, Button, TextField,styled, Typography, AppBar} from "@mui/material"
import { useState } from 'react'
import "./login.css"


const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};
const Image = styled('img')({
    width: 200,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});
const Login = () => {
    const[account,toggleAccount]= useState('/login')
    const[signup,setSignup]=useState(signupInitialValues)
    const toggleSignup=()=>{
        account==='/signup' ? toggleAccount('/login'):toggleAccount('/signup')
    }
    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        console.log(signup);
    }
    const imgurl = "https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png"
    
  return (
    <>
    <AppBar position="static" className='app1'><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alumni Management System
          </Typography></AppBar>
    <Box className='contain'>
        
        <Box>
            <Image  src={imgurl} alt='Login'/>
           
            {
              account === '/login' ?
              <Box className='wrapper'>
                <TextField variant='standard' label='Enter username'/>
                <TextField variant='standard' label='Enter password'/>
                <Button variant='contained' className='loginButton'>Login</Button>
                <Typography style = {{textAlign:'center'}}>or</Typography>
                <Button onClick={toggleSignup} style={{ marginBottom: 50 }}>Create an account</Button>
                </Box>
                :
                <Box className="wrapper">
                    <Box className='small'>
                  <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='username' label='Enter email'/>
        </Box>
        <Box className='small'>
        <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/> 
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='passout_year' label='Passout year'/> 
        </Box>  
        <Box className='small'>
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='course_graduated' label='Course Garduated'/>   
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Enter_mobile_Number' label='Mobile Number'/> 
        </Box>  
        <Box className='small'>     
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Enter_your_location' label='Enter your location'/> 
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Enter_your_college_name' label='Enter your college name'/> 
        </Box>

       <Button className='signupbtton'>signup</Button>  
       <Typography style = {{textAlign:'center'}} >or</Typography>  
       <Button variant='contained' onClick={() => toggleSignup()}>Already have an account</Button>   
        </Box>
            }
        </Box>
    </Box>
    </>
  )
}

export default Login
