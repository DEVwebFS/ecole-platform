import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./shared/layouts/PublicLayout";
import Inscription from "./modules/public/pages/Inscription";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "inscription", element: <Inscription /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}