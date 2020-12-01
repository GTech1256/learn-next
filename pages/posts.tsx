import {NextPageContext} from "next";
import Link from "next/link";
import {useState, useEffect} from "react";
import {IPost} from "../interfaces/post";
import MainLayout from "../layout/MainLayout"

interface IProps {
  posts?: IPost[]
}

export default function Posts({posts: serverPosts}: IProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts/`)
      const data = await response.json();

      setPosts(data);
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

  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/posts`)
  const posts: IPost[] = await response.json();

  return {posts};
}
