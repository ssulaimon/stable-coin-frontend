import { AssetPrice } from "../utils/context/Contexts"
import { useEffect, useState } from "react"
import "../styles/app/App.css";
import { IoMdMenu } from "react-icons/io";
import { myRoutes } from "../utils/routes/routes";
import { MdDashboard } from "react-icons/md";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { RiLuggageDepositFill } from "react-icons/ri";
import { SiLinuxmint } from "react-icons/si";
import { MdOutlineRedeem } from "react-icons/md";
import { GiWantedReward } from "react-icons/gi";
import { IoReceipt } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { FaBurn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";










export const App = ()=>{
    const [prices, updatePrices] = useState({
        wETHPrice : 0,
        wBTCPrice: 0,
        connected: true
    });
    const [showMenu, updateShowMeu] = useState(false);
    const [currrentIndex, updateCurrentIndex] = useState(0);
    const navigate = useNavigate();
    useEffect(()=>{
        const apiKey = import.meta.env.VITE_API_KEY;
        const endPointBitcoin ="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
        const endPointEthereum ="https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
        const options = {method: 'GET', headers: {accept: 'application/json', 'x-cg-demo-api-key': apiKey}};


fetch(endPointBitcoin, options)
  .then(response => response.json())
  .then(data => updatePrices((currentPrice)=> ({... currentPrice, wBTCPrice: data["bitcoin"]["usd"]})))
  .catch(err => console.error(err));
    
fetch(endPointEthereum, options)
  .then(response => response.json())
  .then(data => updatePrices((currentPrice)=> ({... currentPrice, wETHPrice: data["ethereum"][["usd"]]})))
  .catch(err => console.error(err));
  

    }, [])
    const menus = [{
        name: "Dashboard",
        to: myRoutes.dashboard,
        icon: <MdDashboard/>
    }, {
        name: "Mint USDN",
        to: myRoutes.mint,
        icon: <VscGitPullRequestCreate/>
    }, {
        name: "Depsit Collateral",
        to: myRoutes.deposit,
        icon: <RiLuggageDepositFill/>
    },{
        name: "Mint and Deposit",
        to: myRoutes.mintAndDeposit,
        icon: <SiLinuxmint/>
    }, {
        name: "Redeem Collateral",
        to: myRoutes.redeem,
        icon: <MdOutlineRedeem/>
    },{
name: "Burn USDN",
to: myRoutes.burn,
icon: <FaBurn/>

    } ,
    
    {
        name: "Liquidate",
        to: myRoutes.liquidate,
        icon: <GiWantedReward/>
    }, {
        name: "Transaction History",
        to: myRoutes.transactionHistory,
        icon: <IoReceipt/>
    }, {
        name: "Protocol Data",
        to: myRoutes.protocolData,
        icon: <FaDatabase/>
    }];

  
    return <>
    <AssetPrice.Provider value={prices}>
        <div id="app-main-body">
        <div id="mobile-top-bar">
<button style={{background: "transparent", border: "none"}} onClick={()=> updateShowMeu((currentState)=> !currentState)}>
<IoMdMenu color="black" size={20}/>
</button>
<button>
    Connect wallet
</button>
        </div>

      <div id="outter-layer">
      <ul id="menu-main-item-container" className={showMenu ? "show-menu": "hide-menu"}>
        {
            menus.map((item, index)=> <li key={item.name}>
            <button id="menu-button" style={{backgroundColor: index == currrentIndex ? "#010B13": "transparent", color: index == currrentIndex ? "white": "#010B13"}} onClick={()=>{
                updateCurrentIndex(index);
                navigate(item.to);
                updateShowMeu((currentState)=> !currentState);
            }}>
                <span>
{item.icon}
                </span>
                {item.name}
            </button>
            </li>)
        }
        <li>
            <button>
                Connect Wallet
            </button>
        </li>
      </ul>
      <div id="action-layer">
<Outlet/>
      </div>
      </div>
        </div>
    </AssetPrice.Provider>
    </>
}