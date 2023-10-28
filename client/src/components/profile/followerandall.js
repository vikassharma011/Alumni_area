import React, { useEffect, useState } from "react";
import "./followerandall.css";
import PostDetail from "../explore/postdetail";
import ProfilePic from "./profilepic";
import { Link } from "react-router-dom";
import "./Profile.css"


export default function Followerandall() {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({}); // Initialize user as an empty object
  const [changePic, setChangePic] = useState(false);

  const toggleDetails = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setPosts(posts);
    }
  };

  const changeprofile = () => {
    if (changePic) {
      setChangePic(false);
    } else {
      setChangePic(true);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8000/user/${JSON.parse(localStorage.getItem("user"))._id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setPic(result.posts);
        setUser(result.user);
        console.log(pic);
      });
  }, []);

  return (
    <>
     <ul className="nav">
          <li className="name"><Link to="/" >{user.fullName}</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/contactform">Contact</Link></li>
          <li><Link to="/followerandall" className='link'>Followerandall</Link></li>
        </ul>
    <div className="profile">
      
      {/* Profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
          <img
            onClick={changeprofile}
            src={user?.Photo || picLink} // Use optional chaining here
            alt=""
          />
        </div>
        {/* profile-data */}
        <div className="pofile-data">
          <h1>{user.fullName}</h1> {/* Add a default value in case user.name is not available */}
          <div className="profile-info" style={{ display: "flex" }}>
          <p>{pic.length} posts</p>
            <p>{user.followers ? user.followers.length : "0"} followers</p> 
             <p>{user.following ? user.following.length : "0"} following</p>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          opacity: "0.8",
          margin: "25px auto",
        }}
      />
      {/* Gallery */}
      
        <div className="gallery">
          {pic.map((pics) => {
            return (
              <img
                key={pics._id}
                src={pics.photo}
                alt=""
                onClick={() => {
                  toggleDetails(pics)
                }}
                className="item"
              ></img>
            );
          })}
        </div>
        {show &&
        <PostDetail item={posts} toggleDetails={toggleDetails} />
      }
     {
        changePic &&
        <ProfilePic changeprofile={changeprofile} />
      }
    </div>
    </>
  );
}
