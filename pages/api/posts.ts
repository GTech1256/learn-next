import {NextApiRequest, NextApiResponse} from "next";
import {IPost} from "../../interfaces/post";
import {getAllPosts} from "../../services/db/model/posts";

export default async function postsAPI(
  _req: NextApiRequest,
  res: NextApiResponse<IPost[]>
) {
  const posts = await getAllPosts()
  
  res.json(posts)
}