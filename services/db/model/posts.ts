import {posts} from "../../../db.json";
import {IPost} from "../../../interfaces/post";

export const getAllPosts = () => Promise.resolve(posts);

export const getPost = (
  postId: IPost['id']
) => Promise.resolve(
  posts.find(
    ({id}) => id === postId
  )
);
