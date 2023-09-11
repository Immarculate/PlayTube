
import { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/system';
import React from 'react';
import './Comments.css';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CommentCard from './CommentCard';

function Comments({ videoId }) {
  const [comments, setComments] = useState([]);


  useEffect(() => {
    fetchFromAPI(`commentThreads?part=snippet,&videoId=${videoId}`).then(
      (data) => setComments(data.items)
    );
  }, [videoId]);

  return (
    <Stack className="stack">
      <Box sx={{ borderBottom: '1px dashed grey', marginTop: '10px' }}>
        <h2>Comments</h2>
      </Box>
      {comments.map((item, idex) => (
        <CommentCard comment={item.snippet.topLevelComment.snippet} />
      ))}
    </Stack>
  );
}

export default Comments;
