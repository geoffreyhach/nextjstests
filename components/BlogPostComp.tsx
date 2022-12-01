import { Avatar, Card, CardContent, CardHeader, CardMedia, Link, Stack, Typography } from '@mui/material';
import React from 'react';

import {  BlogPost, User } from '../interfaces';


interface BlogPostProps {
  post: BlogPost,
  user: User
}


function BlogPostComp({post, user}: BlogPostProps) {

    return (
        <Card>
          <Link href={`/blog/${post.id}`} underline="none">
            <Stack direction="row" gap="1rem" alignItems="center" sx={{padding:"1rem"}}>
              <Avatar>{user.username.charAt(0)}</Avatar>
              <Typography>{post.title}</Typography>
            </Stack>
          </Link>
            <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/800/200"
        alt="Paella dish"
      />
            <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      
        </Card>
    );
}

export default BlogPostComp;