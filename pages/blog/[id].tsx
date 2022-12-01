import React, { useState } from "react";
import { Avatar, Card, CardContent, CardMedia, Divider, Stack, Typography, Popover, List, ListItemButton, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import BadgeIcon from '@mui/icons-material/Badge';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import HttpIcon from '@mui/icons-material/Http';
import { BlogPost, Comment, User } from "../../interfaces";

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const posts = await res.json();

    const paths = posts.map((post:BlogPost) => ({
        params: {id : String(post.id)}
    }))
    return {paths, fallback: false }
}

export async function getStaticProps(context:any) {
    const id = context.params.id;
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    const resCom = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const data = await resCom.json()
    const comments = data.filter((com:Comment) => Number(com.postId) === Number(id))
    const resUsers = await fetch("https://jsonplaceholder.typicode.com/users")
    const dataUsers = await resUsers.json()
    const user = dataUsers.filter((user:User) => Number(user.id) === Number(post.userId))[0]
    return {
        props: {post, comments, user}
    }
}

interface PostProps {
    post: BlogPost
    comments: Comment[],
    user: User
}

function Post({post, comments, user}:PostProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const open = Boolean(anchorEl)

    return (
        <Stack sx={{maxWidth:"min(70vh, 800px)", margin: "auto", marginTop:"1rem", padding:"1rem"}}>
            <Card >
            <Stack direction="row" gap="1rem" alignItems="center"sx={{padding:".5rem 1rem"}} >
              <Avatar
              onClick = {(event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)}
                sx={{cursor:"pointer"}}
              >
                {user.username.charAt(0)}
                </Avatar>
                <Popover
                open={open}
                onClose={()=> setAnchorEl(null)}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                
                >
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <BadgeIcon />
                            </ListItemIcon>
                            <ListItemText primary={user.name}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FmdGoodIcon/>
                            </ListItemIcon>
                            <ListItemText primary={user.address.city}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary={user.phone}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <BusinessIcon/>
                            </ListItemIcon>
                            <ListItemText primary={user.company.name}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <HttpIcon/>
                            </ListItemIcon>
                            <ListItemText primary={user.website}/>
                        </ListItem>
                    </List>
                </Popover>
              <Typography>{post.title}</Typography>
            </Stack>

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

            {comments.map(com => (          
                <Card key={String(com.id)} sx={{maxWidth:"80%", margin: "auto", marginTop:"1rem", padding:"1rem"}}>
                    <Typography sx={{fontWeight:"bold"}}>
                    {com.name}
                    </Typography>
                    <Typography>
                    {com.email}
                    </Typography>
                    <Divider />
                    <Typography>
                    {com.body}
                    </Typography>
                </Card>
                
            )
            )}
        </Stack>
    );
}

export default Post;