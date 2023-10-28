import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'





// components
//import Comments from './comments/Comments';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailView = () => {
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const mainuserid = localStorage.getItem("user")._id ;
    const [post, setPost] = useState({});
   // const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
          navigate("./signup");
        }
    
        // Fetching all posts
        fetch(`http://localhost:8000/blogbyid/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setPost(result);
          })
          .catch((err) => console.log(err));
      }, []);
    

    const deleteBlog = async () => {  
      //  await API.deletePost(post._id);
        navigate('/')
    }

    return (
        <Container>
            <Image src={post.picture || url} alt="post" />
            <Box style={{ float: 'right' }}>
                {   
                    mainuserid === id && 
                    <>  
                        <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />
                    </>
                }
            </Box>
            <Heading>{post.title}</Heading>

            <Author>
            {/* to={`/?username=${post.postedBy.email}`}  */}
                <Link style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* <span style={{fontWeight: 600}}>{post.username}</span> */}
                    <Typography>Author: </Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Typography>{post.description}</Typography>
            {/* <Comments post={post} /> */}
        </Container>
    )
}

export default DetailView;