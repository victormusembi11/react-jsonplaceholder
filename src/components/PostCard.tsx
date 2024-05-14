import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Post, User } from "@/types/";

interface PostCardProps {
  post: Post & { user: User };
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          {post.user.name} - {post.user.email}
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-auto">{post.body}</CardContent>
      <CardFooter>
        <Button>Read more</Button>
      </CardFooter>
    </Card>
  );
}
