
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {myRoutes} from "./utils/routes/routes"
import { App } from './pages/App';
import { Mint } from './pages/Mint';
import { mintLoader } from './utils/loader/Loaders';
import { Deposit } from './pages/Deposit';
import { MintAndDeposit } from './pages/MintAndDeposit';
import { Redeem } from './pages/Redeem';
import { Burn } from './pages/Burn';
import { Dashboard } from './pages/Dashboard';
import { TransactionHistory } from './pages/TransactionHistory';
import { ProtocolData } from './pages/ProtocolData';
import { Liquidate } from './pages/Liquidate';



const routes = createBrowserRouter([
  {
    path: myRoutes.index,
    element: <LandingPage/>
  },{
    path: myRoutes.app,
    element: <App/>,
    children: [
      {
        path: myRoutes.mint,
        element: <Mint/>,
        loader: mintLoader,
  
      },{
        path: myRoutes.deposit,
        element: <Deposit/>
      },{
        path: myRoutes.mintAndDeposit,
        element: <MintAndDeposit/>
      },{
        path:myRoutes.redeem,
        element: <Redeem/>
      },{
        path: myRoutes.burn,
        element: <Burn/>
      },{
        path: myRoutes.dashboard,
        element: <Dashboard/>
      },{
        path: myRoutes.transactionHistory,
        element: <TransactionHistory/>
      },
      {
        path: myRoutes.protocolData,
        element: <ProtocolData/>
      },{
        path: myRoutes.liquidate,
        element: <Liquidate/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
