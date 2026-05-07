import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../../shared/layouts/PublicLayout';
import Inscription from './pages/Inscription';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: 'inscription', element: <Inscription /> },
      // path: 'accueil', element: <Accueil /> ...
    ]
  }
]);

export default router;