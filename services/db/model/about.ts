import {IAbout} from "../../../interfaces/about";
import {about} from "../../../db.json";

type GetAboutModel = () => Promise<IAbout>;

export const getAboutModel: GetAboutModel = () => Promise.resolve(
  about
);
