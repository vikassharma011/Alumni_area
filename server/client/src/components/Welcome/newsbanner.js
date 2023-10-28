import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NewsCard from './newscard';
import "./newsbanner.css"
import MenuIcon from '@mui/icons-material/Menu';

import { styled } from '@mui/material'; // Import styled from Material-UI

const MEDIUM_RSS_URL = 'https://api.rss2json.com/v1/api.json';
const RSS_FEED_URL = 'https://medium.com/feed/personal-growth';

const NewsBannerContainer = styled(Container)`
  padding: 16px;
  background-color: #f5f5f5; /* Adjust the background color as needed */
`;

const NewsBannerTitle = styled(Typography)`
  && {
    font-size: 24px;
  }
`;

const MediumBlogLink = styled(Link)`
  && {
    display: flex;
    align-items: center;
   
  }
`;

function NewsBanner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${MEDIUM_RSS_URL}?rss_url=${RSS_FEED_URL}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.items.slice(0, 3));
      });
  }, []);

  return (
    <NewsBannerContainer className='area'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NewsBannerTitle variant="h5" component="div">
            News & Insight
          </NewsBannerTitle>
        </Grid>
        <Grid item xs={12}>
          <MediumBlogLink href="" className='text'>
           <MenuIcon/>
            View all articles
          </MediumBlogLink>
        </Grid>
        {data.map((blog, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <NewsCard
              link={blog.link}
              thumbnail={blog.thumbnail}
              desc={blog.description}
              title={blog.title}
            />
          </Grid>
        ))}
      </Grid>
    </NewsBannerContainer>
  );
}

export default NewsBanner;
