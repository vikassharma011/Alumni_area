import React from 'react';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const NewsContainer = styled(Paper)`
  display: flex;
  margin: 16px;
  padding: 16px;
`;

const NewsImage = styled('img')`

width: 100%;
max-height: 200px; /* Adjust this value as needed */
border: 1px solid #ccc;
border-radius: 4px;
object-fit: cover;
`;

const NewsContent = styled('div')`
  padding: 8px;
`;

const ReadArticle = styled('span')`
  color: #1976D2;
  cursor: pointer;
`;

function NewsCard(props) {
  return (
    <Link href={props.link} target="_blank" rel="noopener noreferrer">
      <NewsContainer>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <NewsImage
              src={props.thumbnail}
              alt="News Thumbnail"
              onError={(e) => (e.target.src = '/images/grey.jpg')}
            />
          </Grid>
          <Grid item xs={8}>
            <NewsContent>
              <Typography variant="h6">{props.title}</Typography>
              <ReadArticle>Read Article</ReadArticle>
            </NewsContent>
          </Grid>
        </Grid>
      </NewsContainer>
    </Link>
  );
}

export default NewsCard;
