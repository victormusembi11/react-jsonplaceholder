import axios from "axios";

import { Post, User, Comment } from "@/types";

export const fetchPosts = async () => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data;
};

export const fetchUsers = async () => {
  const { data } = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data;
};

export const fetchPost = async (id: number) => {
  const { data } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return data;
};

export const fetchComments = async (id: number) => {
  const { data } = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  return data;
};
