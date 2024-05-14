import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./layout";
import Home, { homeLoader } from "@/pages/Home";
import Post from "@/pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
]);

export default router;
