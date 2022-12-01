export interface BlogPost {
    userId: Number,
    id: Number,
    title: String,
    body: String
   }

export interface User {
   id : Number,
   name: String,
   username: String,
   email: String,
   address: {
      street : String,
      suite : String,
      city : String,
      zipcode : String,
      geo : {
         lat: String,
         lng : String
      }
   },
   phone: String,
   website: String,
   company: {
      name: String,
      catchPhrase: String,
      bs: String
   }
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