import { useLoaderData } from "react-router-dom";

import { Post, User } from "@/types";
import { PostCard } from "@/components/PostCard";
import { PostForm } from "@/components/CreatePost";
import { fetchPosts, fetchUsers } from "@/api";

interface PostWithUser extends Post {
  user: User;
}

function joinPostWithUser(posts: Post[], users: User[]): PostWithUser[] {
  return posts.map((post: Post) => {
    const user = users.find((user: User) => user.id === post.userId);

    return {
      ...post,
      user: user || ({} as User),
    };
  });
}

export const homeLoader = async () => {
  const posts = await fetchPosts();
  const users = await fetchUsers();

  const data = joinPostWithUser(posts, users);

  return data;
};

export default function Home() {
  const data: PostWithUser[] = useLoaderData() as PostWithUser[];

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold">Home</h1>
      <PostForm />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((post: PostWithUser) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
