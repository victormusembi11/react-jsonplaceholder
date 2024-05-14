import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { Post, User, Comment } from "@/types";
import { fetchPost, fetchUsers, fetchComments } from "@/api";

export const postLoader = async ({ params }: LoaderFunctionArgs) => {
  const postId = Number(params.id);
  if (isNaN(postId)) {
    throw new Error("ID is not a number");
  }

  const post = await fetchPost(postId);
  const users = await fetchUsers();
  const comments = await fetchComments(post.id);

  return { post, users, comments };
};

export default function Page() {
  const data = useLoaderData() as {
    post: Post;
    users: User[];
    comments: Comment[];
  };

  console.log(data);

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold">Post</h1>
    </div>
  );
}
