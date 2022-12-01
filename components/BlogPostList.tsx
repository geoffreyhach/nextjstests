import React from 'react';
import {  Stack } from '@mui/material';
import { BlogPostListProps, BlogPost } from '../interfaces';
import BlogPostComp from './BlogPostComp';







export default function BlogPostList({posts} : BlogPostListProps): JSX.Element {

    return (
        <Stack
        sx={{maxWidth:"80vw",
        minHeight: "100vh",
        margin:"auto",
        backgroundColor:"aliceblue"}}
        >

            {posts && posts.map((post:BlogPost) => <BlogPostComp key={post.id} {...post}/>)}
          
            
        

        </Stack>
    );
}

