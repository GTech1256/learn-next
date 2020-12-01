import {NextApiRequest, NextApiResponse} from "next";
import {posts} from "../../../db.json";
import {IPost} from "../../../interfaces/post";

interface PostNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default function about(req: PostNextApiRequest, res: NextApiResponse<IPost>) {
  res.json(posts.find(({id}) => id === req.query.id))
}