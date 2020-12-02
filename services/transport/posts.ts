import {IPost} from "../../interfaces/post";
import http from "../http";

const BASE_PATH = '/posts'

export const fetchPosts = async () => await http.get<IPost[]>(BASE_PATH);