import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import EcolePage from "./pages/EcolePage";
import Activities from "./pages/Activites";
import Inscription from "./pages/Inscription";
import Niveaux from "./pages/Niveaux";
import Connection from "./pages/Connexion";
import PublicLayout from "../../shared/layouts/PublicLayout";

// pages


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "ecole", element: <EcolePage /> },
      { path: "niveaux", element: <Niveaux /> },
      { path: "activities", element: <Activities /> },
      { path: "inscription", element: <Inscription /> },
      { path: "connexion", element: <Connection /> },
    ],
  },
]);
export default router; 
