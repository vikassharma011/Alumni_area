import React from "react";
import {Box, Button, TextField,styled, Typography, AppBar,Grid} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import "./login.css"
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import Cookies from "universal-cookie";


const cookies = new Cookies();


const signupInitialValues = {
    
    email: '',
    password: '',
};
const Image = styled('img')({
    width: 200,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});
const loginInitialValues = {
    email:'',
    password:'',
    fullName:'',
    CollageName:'',
    Graduated_year:'',
    Enter_mobile_Number:'',
    Enter_your_location:'',
    Company_Name:''

}
const Login = ({ isUserAuthenticated}) => {
  const navigate = useNavigate();
    const[account,toggleAccount]= useState('login')
    const[signup,setSignup]=useState(signupInitialValues)
    const [login, setLogin] = useState(loginInitialValues);
    const [loading, setLoading] = useState(false);
    
    const toggleSignup=()=>{
        account==='signup' ? toggleAccount('login'):toggleAccount('signup')
    }
    const onInputChange = (e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        console.log(signup);
    }
    const onLoginChange = (e)=>{
      setLogin({...login,[e.target.name]:e.target.value});
      console.log(login);
  }
    const HandleSignup = (e)=>{
       // prevent the form from refreshing the whole page
    e.preventDefault();
    setLoading(true);
    const configuration = {
      method: "post",
      url: "/signup",
      data: JSON.stringify({
        email:signup.email,
        password:signup.password,
        fullName:signup.fullName,
        CollageName:signup.CollageName,
        Graduated_year:signup.Graduated_year,
        Enter_mobile_Number:signup.Enter_mobile_Number,
        Enter_your_location:signup.Enter_your_location,
        Company_Name:signup.Company_Name
      }), headers: {
        'Access-Control-Allow-Origin': '*', // or specify the allowed origins
        'Content-Type': 'application/json', // Set the content type appropriately
     
      },
     
     };
     axios(configuration)
    .then((result) => {console.log(result);
      toast.success("User created!");
        window.confirm("user create! now click already have an account")
    }
    
    )
    .catch((error) => {console.log(error);
      toast.error("Error creating user!");
    })
    .finally(() => setLoading(false));
    }

    const HandleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      const config = {
        method: 'post',
        url: '/login', // Update the URL to your login endpoint
        data: JSON.stringify({
          email: login.email,
          password: login.password,
        }), headers: {
          'Access-Control-Allow-Origin': '*', // or specify the allowed origins
          'Content-Type': 'application/json', // Set the content type appropriately
       
        },
      };
  
      axios(config)
        .then((response) => {
          console.log(response);
          toast.success("Login successful!");
          // Handle the login success, e.g., store the token in local storage
          
          cookies.set("TOKEN",response.token,{
            path:"/"
          })
          isUserAuthenticated(true);
            localStorage.setItem("jwt",response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.user));
            setLogin(loginInitialValues);
            navigate('/home');
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error logging in!"); 
          // Handle login error, e.g., show an error message to the user
        })
        .finally(() => setLoading(false));
    };

    const imgurl = "https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png"
    
  return (
    <>
    <AppBar position="static" className='app1'><Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alumni Management System
          </Typography></AppBar>
          <Grid container justifyContent="center"> {/* Use Grid container */}
        <Grid item xs={12} sm={12} md={6} lg={4}>
    <Box className='contain'>
        
        <Box>
            <Image  src={imgurl} alt='Login'/>
           
            {
              account === 'login' ?
              <Box className='wrapper'>
                <TextField variant='standard' label='Enter Email' name='email' onChange={(e) => onLoginChange(e)}/>
                <TextField variant='standard' label='Enter password' name='password' onChange={(e) => onLoginChange(e)}/>
                <Button variant='contained' className='loginButton' onClick={HandleLogin}>Login</Button>
                <Typography style = {{textAlign:'center'}}>or</Typography>
                <Button onClick={toggleSignup} style={{ marginBottom: 50 }}>Create an account</Button>
                </Box>
                :
                <Box className="wrapper">
                    <Box className='small'>
                  <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
        <TextField variant='standard'  onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/>
        </Box>
        <Box className='small'>
<TextField variant='standard' onChange={(e) => onInputChange(e)} name='fullName' label='Enter Your Name'/> 
<TextField variant='standard'  onChange={(e) => onInputChange(e)} name='CollageName' label='College Name'/> 
</Box>  
<Box className='small'>
<TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Graduated_year' label='Garduated year'/>   
<TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Enter_mobile_Number' label='Mobile Number'/> 
</Box>  
<Box className='small'>     
<TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Enter_your_location' label='Enter your location'/> 
<TextField variant='standard'  onChange={(e) => onInputChange(e)} name='Company_Name' label='Enter your company name'/> 
</Box>
       

       <Button className='signupbtton' onClick={HandleSignup}>signup</Button>  
       <Typography style = {{textAlign:'center'}} >or</Typography>  
       <Button variant='contained' onClick={() => toggleSignup()}>Already have an account</Button>   
        </Box>
            }
        </Box>
    </Box>
    </Grid>
    </Grid>
    <ToastContainer/>
    </>
  )
}

export default Login
