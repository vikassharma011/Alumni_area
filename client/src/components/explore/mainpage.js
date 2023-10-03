import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./mainpage.css";

export default function Mainpage() {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);

  return (
    <div className="home">
      <Grid container spacing={3}>
        {data.map((posts) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={posts._id}>
            <div className="card">
              <div className="card-header">
                <div className="card-pic">
                  <img
                   // src={posts.postedBy.Photo ? posts.postedBy.Photo : picLink}
                    alt=""
                  />
                </div>
                <h5>
                  <Link to={`/profile/${posts.postedBy._id}`}>
                    {/*posts.postedBy.name*/}
                  </Link>
                </h5>
              </div>
              <div className="card-image">
                <img /*src={posts.photo}*/ alt="" />
              </div>
              <div className="card-content">
                {posts.likes.includes(
                  JSON.parse(localStorage.getItem("user"))._id
                ) ? (
                  <span
                    className="material-symbols-outlined material-symbols-outlined-red"
                  >
                    favorite
                  </span>
                ) : (
                  <span className="material-symbols-outlined">favorite</span>
                )}
                <p>{posts.likes.length} Likes</p>
                <p>{posts.body}</p>
                <p
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => {
                    // toggleComment(posts);
                  }}
                >
                  View all comments
                </p>
              </div>
              <div className="add-comment">
                <span className="material-symbols-outlined">mood</span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <button className="comment">Post</button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      {show && (
        <div className="showComment">
          <div className="container">
            <div className="postPic">
              <img src={item.photo} alt="" />
            </div>
            <div className="details">
              <div
                className="card-header"
                style={{ borderBottom: "1px solid #00000029" }}
              >
                <div className="card-pic">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
                <h5>{item.postedBy.name}</h5>
              </div>
              <div
                className="comment-section"
                style={{ borderBottom: "1px solid #00000029" }}
              >
                {item.comments.map((comment) => {
                  return (
                    <p className="comm" key={comment._id}>
                      <span
                        className="commenter"
                        style={{ fontWeight: "bolder" }}
                      >
                        {comment.postedBy.name}{" "}
                      </span>
                      <span className="commentText">{comment.comment}</span>
                    </p>
                  );
                })}
              </div>
              <div className="card-content">
                <p>{item.likes.length} Likes</p>
                <p>{item.body}</p>
              </div>
              <div className="add-comment">
                <span className="material-symbols-outlined">mood</span>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <button className="comment">Post</button>
              </div>
            </div>
          </div>
          <div className="close-comment">
            <span className="material-symbols-outlined material-symbols-outlined-comment">
              close
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
