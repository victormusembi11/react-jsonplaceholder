import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Comment } from "@/types";

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <CardDescription>{comment.email}</CardDescription>
      </CardHeader>
      <CardContent>{comment.body}</CardContent>
      <CardFooter>
        <Button>Reply</Button>
      </CardFooter>
    </Card>
  );
}
