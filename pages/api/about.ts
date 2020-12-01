import {NextApiRequest, NextApiResponse} from "next";
import {IAbout} from "../../interfaces/about";

export default function about(_req: NextApiRequest, res: NextApiResponse<IAbout>) {
  res.json({
    title: "About",
    body: "About page"
  })
}