import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Accueil from "./pages/Accueil";
import EcolePage from "./pages/EcolePage";
import Activities from "./pages/Activites";
import Niveaux from "./pages/Niveaux";
import Inscription from "./pages/Inscription";
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
  {
    path: "/admin/dashboard",

    element: (
      <ProtectedRoute role="admin">
        <h1>Admin Dashboard</h1>
      </ProtectedRoute>
    ),
  },

  // FORMATEUR
  {
    path: "/formateur/dashboard",

    element: (
      <ProtectedRoute role="formateur">
        <h1>Formateur Dashboard</h1>
      </ProtectedRoute>
    ),
  },

  // PARENT
  {
    path: "/parent/dashboard",

    element: (
      <ProtectedRoute role="parent">
        <h1>Parent Dashboard</h1>
      </ProtectedRoute>
    ),
  },
]);


export default router; 
