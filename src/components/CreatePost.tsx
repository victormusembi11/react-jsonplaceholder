import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoMdAdd } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(3, { message: "Title is too short" }),
  body: z.string().min(10, { message: "Body is too short" }),
  userId: z.number().int(),
});

export function PostForm() {
  const [showForm, setShowForm] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      userId: 1,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      {!showForm && (
        <div className="flex justify-end my-4">
          <Button onClick={() => setShowForm(!showForm)}>
            <IoMdAdd className="h-6 w-6" />
            <span className="ml-2">Create Post</span>
          </Button>
        </div>
      )}

      {showForm && (
        <Card className="w-full mb-8">
          <CardHeader>
            <CardTitle>Create a Post</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Body"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-start">
                  <Button variant="ghost" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="ml-2">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
