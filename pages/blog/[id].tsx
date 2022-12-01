import { Card, CardContent, CardHeader, CardMedia, Divider, Typography } from "@mui/material";
import { BlogPost, Comment } from "../../interfaces";

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
    return {
        props: {post, comments}
    }
}

interface PostProps {
    post: BlogPost
    comments: Comment[]
}

function Post({post, comments}:PostProps) {
    console.log(comments)
    return (<>
        <Card>
            <CardHeader title={post.title}></CardHeader>
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

        </>
    );
}

export default Post;