import { Avatar, Box } from '@mui/material'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <Box sx={{ marginTop: '25px' }} display="flex">
          <Avatar
            sx={{ marginTop: '2px', marginLeft: '10px', marginRight: '20px' }}
          >
            <img
              src={comment.authorProfileImageUrl}
              alt="profile"
            />
          </Avatar>
          <Box display="block">
            <span>
              {comment.authorDisplayName}
            </span>
            <br />
            <span>{comment.textOriginal}</span><br />
            <span display="flex" centered sx={{marginTop: '2px'}}> <ThumbUpOutlinedIcon sx={{marginTop: '5px'}}/> {comment.likeCount}</span>
          </Box>
        </Box>
  )
}

export default CommentCard