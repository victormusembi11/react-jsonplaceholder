import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { Post, User, Comment } from "@/types";
import { fetchPost, fetchUsers, fetchComments } from "@/api";
import { PostCard } from "@/components/PostDetails";
import { CommentForm } from "@/components/CommentForm";
import { CommentCard } from "@/components/CommentCard";

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

  return (
    <div>
      <PostCard post={data.post} />
      <CommentForm postId={data.post.id} />
      <h1 className="text-2xl font-bold my-8">Comments</h1>
      {data.comments.map((comment: Comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
