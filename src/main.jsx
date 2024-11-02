
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { myRoutes } from './utils/models/routes/routes';
import { App } from './pages/App';

const routes = createBrowserRouter([
  {
    path: myRoutes.index,
    element: <LandingPage/>
  },
  {
    path: myRoutes.app,
    element: <App/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
