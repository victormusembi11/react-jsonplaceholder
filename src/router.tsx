import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./layout";
import Home, { homeLoader } from "@/pages/Home";

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
    ],
  },
]);

export default router;
