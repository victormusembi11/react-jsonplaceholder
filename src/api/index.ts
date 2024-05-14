import axios from "axios";

import { Post, User } from "@/types";

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
