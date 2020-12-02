import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {NextPageContext} from "next";
import Link from "next/link";

import {IPost} from "../../interfaces/post";
import MainLayout from "../../layout/MainLayout";
import {getPost} from "../../services/db/model/posts";
import {fetchPost} from "../../services/transport/post";

interface IProps {
  post?: IPost;
}

export default function Post({post: serverPost}: IProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const postData = await fetchPost(router.query.id as string);

      setPost(postData);
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

  const post: IPost = await getPost(query.id);

  return {post};
}
