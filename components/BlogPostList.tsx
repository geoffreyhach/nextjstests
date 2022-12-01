import React from 'react';
import {  Stack } from '@mui/material';
import {  BlogPost, User } from '../interfaces';
import BlogPostComp from './BlogPostComp';

interface BlogPostListProps {
    posts : BlogPost[],
    users: User[]
  }

export default function BlogPostList({posts, users} : BlogPostListProps): JSX.Element {
    

    const getUserDetails = (id:Number) => {
        return users.filter(user => Number(user.id) === Number(id))[0]
    }

    // console.log(getUserDetails(2))

    return (
        <Stack gap="1rem"
        sx={{maxWidth:"min(80vw, 800px)",
        minHeight: "100vh",
        margin:"auto"}}
        >
            {posts && posts.map((post:BlogPost) => <BlogPostComp key={String(post.id)} post={post} user={getUserDetails(Number(post.userId))}
            />)}
        </Stack>
    );
}

