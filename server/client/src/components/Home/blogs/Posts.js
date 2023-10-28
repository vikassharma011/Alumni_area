import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link , useNavigate} from 'react-router-dom';



//components
import Post from './Post';

const Posts = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    
    // const [searchParams] = useSearchParams();
    // const category = searchParams.get('category');
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (!token) {
          navigate("./signup");
        }
    
        // Fetching all posts
        fetch("/allblog", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setPosts(result);
          })
          .catch((err) => console.log(err));
      }, []);
    

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        No data is available for selected category
                    </Box>
            }
        </>
    )
}

export default Posts;