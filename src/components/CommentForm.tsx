import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  postId: z.number(),
  name: z.string().min(3, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  body: z.string().min(1, { message: "Comment is too short" }),
});

export function CommentForm({ postId }: { postId: number }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postId,
      name: "John Doe",
      email: "johndoe@example.com",
      body: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 my-4">
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your comment here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter your comment here</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Post</Button>
      </form>
    </Form>
  );
}
