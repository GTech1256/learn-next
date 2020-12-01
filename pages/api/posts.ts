import {NextApiRequest, NextApiResponse} from "next";
import {IPost} from "../../interfaces/post";
import {posts} from "../../db.json";

export default function about(_req: NextApiRequest, res: NextApiResponse<IPost[]>) {
  res.json(posts)
}