import {IPost} from "../../interfaces/post";
import http from "../http";

const BASE_PATH = '/post'

export const fetchPost = async (id: string) => await http.get<IPost>(`${BASE_PATH}/${id}`);