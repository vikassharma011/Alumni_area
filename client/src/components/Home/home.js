import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios"
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Home = () => {
    const [message, setMessage] = useState("");
    const token = cookies.get("TOKEN");
    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
          method: "get",
          url: "https://localhost:800/home",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios(configuration)
        .then((result) => {
          // assign the message in our result to the message we initialized above
          setMessage(result.data.message);
        })
        .catch((error) => {
          error = new Error();
          console.log(error)
        });
      }, )
  
   
  
    return (
      <div>
        <h1 className="text-center">you are a authenticate user</h1>
  
        {/* displaying our message from our API call */}
        <h3 className="text-center text-danger">{message}</h3>
      </div>
    );
}

export default Home
