

export interface BlogPost {
    userId: Number,
    id: Number,
    title: String,
    body: String}
  
  
 export interface BlogPostListProps {
    posts : BlogPost[],
  
  }

export interface Comment {
   postId: Number,
   id: Number,
   name: String,
   email: String,
   body: String,
}

export interface Comments {
   comments: Comment[]
}