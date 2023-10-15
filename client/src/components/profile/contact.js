import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "./Profile.css"
//import { colors } from '@mui/material';
import "./contact.css"



function Contact() {
  return (
    <div>
      <div className="main-nav">
        <ul className="nav">
          <li className="name"><Link to="/" >vikas sharma</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="work_header">
        <p className="head_title">Contact Me :</p>
      </div>
      <main className="flex">
        <div className="card work">
          <img src="images/me.jpg" alt="Yogita Verma" className="profile-image" />
          <div className="con">
            <h2>Get in Touch:</h2>
            <p className="details">Yogita Verma.</p>
            <p><a href="mailto:veryogita@gmail.com">veryogita@gmail.com</a></p>
          </div>
          <footer className="contact_footer">
            <ul>
              <li><Link to="https://twitter.com/YogitaVerma20" target="_blank" className="social twitter">Twitter</Link></li>
              <li><Link to="https://www.linkedin.com/in/yogita-verma1994/" target="_blank" className="social linkedin">LinkedIn</Link></li>
              <li><Link to="https://github.com/Yog9" target="_blank" className="social github">Github</Link></li>
            </ul>
          </footer>
        </div>
      </main>
      <p className="copyright">Copyright 2018, Yogita Verma</p>
    </div>
  );
}

export default Contact;
