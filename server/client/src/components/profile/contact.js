import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useState , useEffect } from 'react';
import "./Profile.css"
//import { colors } from '@mui/material';
import "./contact.css"



function Contact() {
  const[result,setResult] = useState({})
  const[pic,setPic] = useState()

  useEffect(() => {
    fetch(`/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        // setPic(result.posts);
        setResult(result.user);
        console.log(pic);
      });
  }, []);
  return (
    <div>
       <div className="main-nav">
        <ul className="nav">
          <li className="name"><Link  className='link'>{result.fullName}</Link></li>
          <li><Link to="/home" className='link'>Home</Link></li>
          <li><Link to="/work" className='link'>Work</Link></li>
          <li><Link to="/contactform" className='link'>Contact</Link></li>
          <li><Link to="/followerandall" className='link'>Followerandall</Link></li>
        </ul>
      </div>
      <div className="work_header">
        <p className="head_title">Contact Me :</p>
      </div>
      <main className="flex">
        <div className="card work">
          <img src={result.Photo} alt="Yogita Verma" className="profile-image" />
          <div className="con">
            <h2>Get in Touch:</h2>
            <p className="details">{result.CollageName}</p>
            <p><a href={result.email}>{result.email}</a></p>
          </div>
          <footer className="contact_footer">
            <ul>
              <li><Link to="https://twitter.com/" target="_blank" className="social twitter">Twitter</Link></li>
              <li><Link to="https://www.linkedin.com/in/" target="_blank" className="social linkedin">LinkedIn</Link></li>
              <li><Link to="https://github.com/" target="_blank" className="social github">Github</Link></li>
            </ul>
          </footer>
        </div>
      </main>
      <p className="copyright">Copyright 2018, Yogita Verma</p>
    </div>
  );
}

export default Contact;
