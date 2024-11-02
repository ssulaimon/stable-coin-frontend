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
import { Deposit } from "./Deposit";









export const  App = ()=>{
    const [currentIndex, updateCurrentIndex] = useState(0);
    const [showSidePannel, updateShowSidePannel] = useState(false);
    const menus = [
        {
            name: "Dashboard",
            path: "",
            icon: <MdSpaceDashboard/>
        },   {
            name: "Deposit Collateral",
            path: "",
            icon:<FaCircleDollarToSlot/>
        }
        , {
            name: "Mint USDN",
            path: "",
            icon: <SiLinuxmint/>
        },
         {
            name: "Redeem Collateral",
            path: "",
            icon: <BsBank2/>
        }, , {
            name: "Burn",
            path: "",
            icon: <FaFire/>
        }, {
            name: "Mint and Deposit",
            path: "",
            icon: <TbTransfer/>
        }, {
            name: "Liquidate",
            path: "",
            icon: <AiFillDashboard/>
        }, {
            name: "Transactions",
            path: "",
            icon: <IoReceipt/>
        }, {
            name: "Protocol data",
            path: "",
            icon: <FaDatabase/>
        }, {
            name: "Claim token",
            path: "",
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
            }}/>)
        }
        </div>
        <div id="out-let-container">
<Deposit/>
        </div>
      </div>
    </div>
}