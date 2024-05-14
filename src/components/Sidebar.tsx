import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const links = [
  { id: 1, title: "Posts", path: "/" },
  { id: 2, title: "Albums", path: "/" },
  { id: 3, title: "Todos", path: "/" },
  { id: 4, title: "Users", path: "/" },
  { id: 5, title: "Settings", path: "/" },
];

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <Card
      className="hidden mx-auto lg:flex flex-col w-80"
      style={{ maxHeight: "85vh" }}
    >
      <CardHeader>
        <CardTitle>
          Profile
          <Separator className="my-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="mb-auto w-full">
        {links.map((link) => (
          <Button
            className="w-full justify-start text-left my-2"
            onClick={() => navigate(link.path)}
            variant="ghost"
          >
            {link.title}
          </Button>
        ))}
      </CardContent>
      <CardFooter className="flex-col ">
        <Separator className="my-4" />
        <Button className="w-full">Logout</Button>
      </CardFooter>
    </Card>
  );
}
