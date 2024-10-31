import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { myRoutes } from './utils/models/routes/routes';
import { AppPage } from './pages/AppPage';
import { Dashboard } from './pages/Dashboard';
import { Deposit } from './pages/Deposit';
import { Mint } from './pages/Mint';
import { MintAndDeposit } from './pages/MintAndDeposit';
const routes = createBrowserRouter([
  {
    path: myRoutes.index,
    element: <LandingPage/>
  },{
    path: myRoutes.app,
    element : <AppPage/>,
    children:[
      {
        path : myRoutes.dashboard,
        element: <Dashboard/>
      },{
        path: myRoutes.deposit,
        element: <Deposit/>
      },{
        path: myRoutes.mint,
        element: <Mint/>
      },{
        path: myRoutes.mintAndDeposit,
        element: <MintAndDeposit/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
