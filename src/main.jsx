
import { createRoot } from 'react-dom/client'
import './index.css'
import { LandingPage } from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { myRoutes } from './utils/routes/routes';
import { App } from './pages/App';
import { Dashboard } from './pages/Dashboard';
import { DepositAndMint } from './pages/DepositAndMint';
import { Burn } from './pages/Burn';
import {Deposit} from "./pages/Deposit"
import { Mint } from './pages/Mint';
import { RedeemCollateral } from './pages/RedeemCollateral';
import { Liquidate } from './pages/Liquidate';
import { Transactions } from './pages/Transactions';
import { ProtocolData } from './pages/ProtocolData';
import { ClaimToken } from './pages/ClaimToken';


const routes = createBrowserRouter([
  {
    path: myRoutes.index,
    element: <LandingPage/>
  },
  {
    path: myRoutes.app,
    element: <App/>,
    children: [
      {
        path: myRoutes.dashboard,
        element: <Dashboard/>
      },{
        path: myRoutes.deposit,
        element: <Deposit/>
      },{
        path: myRoutes.mint,
        element: <Mint/>
      },
      {
        path: myRoutes.redeem,
        element: <RedeemCollateral/>
      },{
        path: myRoutes.burn,
        element: <Burn/>
      },{
        path: myRoutes.mintAndDeposit,
        element: <DepositAndMint/>
      },{
        path: myRoutes.liquidate,
        element: <Liquidate/>
      },{
        path: myRoutes.transactionHistory,
        element: <Transactions/>
      },{
        path: myRoutes.protocolData,
        element: <ProtocolData/>
      },{
        path: myRoutes.claimToken,
        element: <ClaimToken/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
