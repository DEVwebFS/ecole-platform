import { RouterProvider } from "react-router-dom";
import router from "../src/modules/public/routes";

export default function App() {
  return <RouterProvider router={router} />;
}