import {NextPageContext} from "next";
import Link from "next/link";
import {useState, useEffect} from "react";
import {IPost} from "../interfaces/post";
import MainLayout from "../layout/MainLayout"
import {getAllPosts} from "../services/db/model/posts";
import {fetchPosts} from "../services/transport/posts";

interface IProps {
  posts?: IPost[]
}

export default function Posts({posts: serverPosts}: IProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const postsData = await fetchPosts()

      setPosts(postsData);
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Posts Page">
      <h1>
        Posts Page
      </h1>
      <ul>
        {posts.map(({id, title}) => (
          <li key={id}>
            <Link href="/post/[id]" as={`/post/${id}`}><a>
              {title}  
            </a></Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
  if (!req) {
    return {posts: null}
  }

  const posts: IPost[] = await getAllPosts();

  return {posts};
}
