import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


//import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
   

    const [post, setPost] = useState(initialPost);
  //  const [picture,setPicture] = useState("")
    const [file, setFile] = useState('');
   // const { account } = useContext(DataContext);

    const newurl = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  
  
 

  useEffect(() => {
    // saving post to mongodb
    if (url) {
      fetch("http://localhost:8000/createBlog", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
         title:post.title,
         description:post.description,
         createdDate : post.createdDate,
          pic: url,
         
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            // notifyA(data.error);
            console.log(data.error)
          } else {
            // notifyB("Successfully Posted");
            navigate("/home");
          }
        })
        .catch(err => console.log(err));
    }
  }, [url, post, navigate]);

  // posting image to cloudinary
  const BlogDetails = () => {
    console.log(body, file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "isa-project");
    data.append("cloud_name", "cloud-content");
    fetch("https://api.cloudinary.com/v1_1/cloud-content/image/upload", {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err));
  };

  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image id="output" src={newurl} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(event) => {
                        loadfile(event);
                        setFile(event.target.files[0]);
                    }}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => {BlogDetails()}}  variant="contained" color="primary">Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;