import {NextApiRequest, NextApiResponse} from "next";
import {IAbout} from "../../interfaces/about";
import {getAboutModel} from "../../services/db/model/about";

export default async function aboutAPI(
  _req: NextApiRequest,
  res: NextApiResponse<IAbout>
) {
  const about = await getAboutModel()
  
  res.json(about)
}