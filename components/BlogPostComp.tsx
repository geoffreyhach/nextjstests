import { Card, CardContent, CardHeader, CardMedia, Link, Typography } from '@mui/material';
import React from 'react';

import {  BlogPost } from '../interfaces';



function BlogPostComp(post: BlogPost) {
  
    return (
        <Card>
          <Link href={`/blog/${post.id}`}>
            <CardHeader title={post.title}></CardHeader>
          </Link>
            <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/200/300"
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