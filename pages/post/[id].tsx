import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import MainLayout from "../../layout/MainLayout";
import { NextPageContext } from "next";
import { IPost } from "../../interfaces/post";

interface IProps {
  post?: IPost;
}

export default function Post({post: serverPost}: IProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/post/${router.query.id}`)
      const data = await response.json();

      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts"><a>Back to all posts</a></Link>
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async ({query, req}: PostNextPageContext) => {
  if (!req) {
    return {}
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/post/${query.id}`)
  const post: IPost = await response.json();

  return {post};
}
