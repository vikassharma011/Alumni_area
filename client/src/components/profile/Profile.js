
// Profile.js
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"; // Import Link from react-router-dom

import './Profile.css';





function Profile() {

  const[result,setResult] = useState({})
  const[pic,setPic] = useState()

  useEffect(() => {
    fetch(`http://localhost:8000/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
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

      <div className='header'>
        <img src={result.Photo} alt="Yogita Verma" className="profile-image" />
        <h1 className="tag name">Hello, I’m {result.fullName}.</h1>
        <p className="tag-location">I stay {result.Enter_your_location}.</p>
      </div>
      <div className="thought">
        <p>ENJOY THE LITTLE THINGS IN LIFE, ONE DAY YOU'LL LOOK BACK AND REALIZE THEY WERE THE BIG THINGS.</p>
      </div>

      <main className="flex">
        <div className="card">
          <h2>Background</h2>
          <p>I’m an aspiring web developer who loves everything about the web. I've lived in lots of different places . I’m excited 
          to bring my life experience to the process of building fantastic looking websites.</p>
          <p>I have a bachelors degree in CS and I am a life-long learner who's always interested in expanding my skills.</p>
        </div> 

        <div className="card">
          <h2>Goals</h2>
          <p>I want to master the process of building web sites and increase my knowledge, skills and abilities in:</p>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
          </ul>
          <p>I’d like to work for a web development firm in helping clients to create an impressive online presence.</p>
        </div> 
      </main>
      <div className='footer'>
        <ul>
          <li><Link to="https://twitter.com/YogitaVerma20" className="social twitter" target="_blank">Twitter</Link></li>
          <li><Link to="https://www.linkedin.com/in/yogita-verma1994/" className="social linkedin" target="_blank">LinkedIn</Link></li>
          <li><Link to="https://github.com/Yog9" className="social github" target="_blank">Github</Link></li>
        </ul>
        <p className="copyright">Copyright 2018, {result.fullName}</p>
      </div>
    </div>
  );
}

export default Profile;

