import React, { useState } from 'react';
import "./Contactus.css";
import Header from '../header/Header';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
//import Footer from '../footer/footer';

const ContactForm = () => {
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[message,setMessage]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name, Email, phone, message }),
            });

            if (response.ok) {
                // Handle success, e.g., show a success message
                console.log('Email sent successfully');
            } else {
                // Handle error, e.g., show an error message
                console.error('Failed to send email');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Network error:', error);
        }
    }

    const handleinput = (e)=>{
      setName(e.target.value)
      setEmail(e.target.value)
      setPhone(e.target.value)
      setMessage(e.target.value)
      console.log(e.target.value)
    }


  return (
    <div className="compart">
        <Header/>
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="ti">Alumni! Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
            <IconButton href="#" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="ti">Contact us</h3>
            <div className="input-compart">
              <input type="text" name="name" placeholder='Name' onChange={(e)=>handleinput(e)} className="input" />
              
            </div>
            <div className="input-compart">
              <input type="email" name="email" placeholder='Email' onChange={(e)=>handleinput(e)} className="input" />
              
            </div>
            <div className="input-compart">
              <input type="tel" name="phone" placeholder='Phone' onChange={(e)=>handleinput(e)} className="input" />
             
            </div>
            <div className="input-compart textarea">
              <textarea name="message" placeholder='Message' onChange={(e)=>handleinput(e)} className="input"></textarea>
           
            </div>
            <input type="submit" value="Send" onClick={handleSubmit}  className="btn" />
          </form>
        </div>
      </div>
   
    </div>
  );
};

export default ContactForm;
