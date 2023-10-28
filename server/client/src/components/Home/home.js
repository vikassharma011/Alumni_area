import React from 'react'
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import axios from "axios"
import Categories from './categories';
import Banner from '../banner/banner';
import Cookies from "universal-cookie";
import Posts from './blogs/Posts';

const cookies = new Cookies();


const Home = () => {
   // const [message, setMessage] = useState("");
    const token = cookies.get("TOKEN");
    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
          method: "get",
          url: "/home",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios(configuration)
        .then((result) => {
          // assign the message in our result to the message we initialized above
          //setMessage(result.data.message);
        })
        .catch((error) => {
          error = new Error();
          console.log(error)
        });
      }, )
  
   
  
    return (
      <>
      <Banner />
      <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
     
  </>
    );
}

export default Home
