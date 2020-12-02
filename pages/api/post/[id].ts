import {NextApiRequest, NextApiResponse} from "next";
import {IPost} from "../../../interfaces/post";
import {getPost} from "../../../services/db/model/posts";

interface PostNextApiRequest extends NextApiRequest {
  query: {
    id: IPost['id']
  }
}

export default async function postAPI(
  req: PostNextApiRequest,
  res: NextApiResponse<IPost>
) {
  const post = await getPost(req.query.id)
  
  res.json(post)
}