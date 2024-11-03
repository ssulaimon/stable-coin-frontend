import { MdSpaceDashboard } from "react-icons/md";
import { AiFillDashboard } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa6";
import { SiLinuxmint } from "react-icons/si";
import { TbTransfer } from "react-icons/tb";
import { FaFire } from "react-icons/fa";
import { IoReceipt } from "react-icons/io5";
import { MdRedeem } from "react-icons/md";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { useState } from "react";
import { MenuButton } from "../components/reusable/MenuButton";
import "../styles/app/App.css";
import { HiOutlineMenu } from "react-icons/hi";
import { DepositAndMint } from "./DepositAndMint";
import { myRoutes } from "../utils/routes/routes";
import { useNavigate, Outlet } from "react-router-dom";









export const  App = ()=>{
    const navigate = useNavigate();
    const [currentIndex, updateCurrentIndex] = useState(0);
    const [showSidePannel, updateShowSidePannel] = useState(false);
    const menus = [
        {
            name: "Dashboard",
            path: myRoutes.dashboard,
            icon: <MdSpaceDashboard/>
        },   {
            name: "Deposit Collateral",
            path: myRoutes.deposit,
            icon:<FaCircleDollarToSlot/>
        }
        , {
            name: "Mint USDN",
            path: myRoutes.mint,
            icon: <SiLinuxmint/>
        },
         {
            name: "Redeem Collateral",
            path: myRoutes.redeem,
            icon: <BsBank2/>
        }, , {
            name: "Burn",
            path: myRoutes.burn,
            icon: <FaFire/>
        }, {
            name: "Mint and Deposit",
            path: myRoutes.mintAndDeposit,
            icon: <TbTransfer/>
        }, {
            name: "Liquidate",
            path: myRoutes.liquidate,
            icon: <AiFillDashboard/>
        }, {
            name: "Transactions",
            path: myRoutes.transactionHistory,
            icon: <IoReceipt/>
        }, {
            name: "Protocol data",
            path: myRoutes.protocolData,
            icon: <FaDatabase/>
        }, {
            name: "Claim token",
            path: myRoutes.claimToken,
            icon: <MdRedeem/>
        }
    ]
    return <div>
    <div id="top-bar">
    <button style={{border: "none", backgroundColor: "transparent"}} onClick={
       ()=>{
        updateShowSidePannel((currentState)=> !currentState)
       }
    }>
    <HiOutlineMenu color="#010B13" size={25}/>
    </button>

    <button style={{
        backgroundColor: "#010B13",
        color: "white",
        padding: "5px",
        border: "none",
        borderRadius: "10px"
    }} className="medium-text">
        Connect
    </button>
    </div>
      <div id="app-body-main-container">
      <div id="side-pannel" className={showSidePannel ? "show-side-pannel ": "hide-side-pannel"}>
        {
            menus.map((item, index)=> <MenuButton value={item} isActive={currentIndex === index ? true: false } key={item.name} onClicked={()=>{
                updateCurrentIndex(index);
                navigate(item.path);

            }}/>)
        }
        </div>
        <div id="out-let-container">
<Outlet></Outlet>
        </div>
      </div>
    </div>
}