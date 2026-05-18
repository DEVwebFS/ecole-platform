import { RouterProvider } from "react-router-dom";
import router from "./modules/public/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;