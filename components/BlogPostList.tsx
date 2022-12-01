import React, { useState } from "react";
import {
    Box,
    FormControl,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
} from "@mui/material";
import { BlogPost, User } from "../interfaces";
import BlogPostComp from "./BlogPostComp";

interface BlogPostListProps {
    posts: BlogPost[];
    users: User[];
}

export default function BlogPostList({
    posts,
    users,
}: BlogPostListProps): JSX.Element {
    const [auteur, setAuteur] = useState("");

    const getUserDetails = (id: Number) => {
        return users.filter((user) => Number(user.id) === Number(id))[0];
    };

    const handleChange = (event: SelectChangeEvent) => {
        if (event.target.value === "all") setAuteur("");
        else setAuteur(event.target.value as string);
    };

    return (
        <Stack
            gap="1rem"
            sx={{
                maxWidth: "min(80vw, 800px)",
                minHeight: "100vh",
                margin: "auto",
            }}
        >
            <Box sx={{ marginTop: "1rem" }}>
                <FormControl fullWidth>
                    <InputLabel id="auteur">Auteur</InputLabel>
                    <Select
                        labelId="auteur"
                        id="auteur"
                        value={auteur}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="all">Tous les auteurs</MenuItem>
                        {users.map(({ id, name, username }, index) => (
                            <MenuItem key={String(index)} value={String(id)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            {posts &&
                posts
                    .filter(
                        (post) =>
                            !auteur || Number(post.userId) === Number(auteur)
                    )
                    .map((post: BlogPost) => (
                        <BlogPostComp
                            key={String(post.id)}
                            post={post}
                            user={getUserDetails(Number(post.userId))}
                        />
                    ))}
        </Stack>
    );
}
