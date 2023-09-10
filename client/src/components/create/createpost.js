import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

//import { API } from '../../service/api';


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
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
      const handleImageUpload = async () => {
        try {
          if (file) {
            const formData = new FormData();
            formData.append("name", file.name);
            formData.append("file", file);
    
            const uploadConfig = {
              method: 'post',
              url: 'YOUR_UPLOAD_API_ENDPOINT', // Update with your upload API endpoint
              data: formData,
              headers: {
                'Content-Type': 'multipart/form-data',
                // You may need to include any additional headers required by your API
              },
            };
    
            // Make the image upload request
            const uploadResponse = await axios(uploadConfig);
    
            // Assuming 'post' is a state variable
            post.picture = uploadResponse.data;
             
            // Continue with any additional logic related to the 'post' object
          }
        } catch (error) {
          console.error(error);
          // Handle image upload error, e.g., show an error message to the user
        }
      };
    
      // Call the image upload function within the useEffect
      handleImageUpload();
      post.categories = location.search?.split('=')[1] || 'All';
     
    }, [file]);
    

  /* const savePost = async () => {
        await API.createPost(post);
        navigate('/home');
    }*/

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt="post" />

            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button  variant="contained" color="primary">Publish</Button>
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
