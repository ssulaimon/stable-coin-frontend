import "../../styles/appPage/SidePannel.css"
import { myRoutes } from "../../utils/models/routes/routes";
import { MdDashboardCustomize } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { SiLinuxmint } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { GiBurningEmbers } from "react-icons/gi";
import { MdRedeem } from "react-icons/md";
import { RiWaterPercentFill } from "react-icons/ri";
import { IoReceiptSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";







import { useState } from "react";

export function SidePannel(){
    const [selectedIndex, updateSelectedIndex] = useState(0);
    const sideItems = [{
        name: "Dashboard",
        to: myRoutes.dashboard,
        icon: <MdDashboardCustomize size={15}/>
    }, {
        name: "Deposit",
        to: myRoutes.deposit,
        icon: <RiLuggageDepositFill size={15}/>
    }, {
        name: "Mint",
        to: myRoutes.mint,
        icon: <SiLinuxmint size={15}/>
    },{
        name: "Mint and Deposit",
        to: myRoutes.mintAndDeposit,
        icon: <GrTransaction size={15}/>

    },{
        name: "Burn",
        to: myRoutes.burn,
        icon: <GiBurningEmbers size={15}/>

    },{
        name: "Redeem",
        to: myRoutes.redeem,
        icon: <MdRedeem size={15}/>

    },{
        name: "Liquidate",
        to: myRoutes.liquidate,
        icon: <RiWaterPercentFill size={15}/>

    },,{
        name: "Protocol Data",
        to: myRoutes.protocolData,
        icon: <FaDatabase size={15}/>

    },{
        name: "Transactions",
        to: myRoutes.receipt,
        icon: <IoReceiptSharp size={15}/>

    },{
        name: "Claim Token",
        to: myRoutes.claimToken,
        icon: <BsBank2 size={15}/>

    }];
    const navigate = useNavigate();
    return <div id="side-pannel">
    {
        sideItems.map((item, index)=> <button className="side-pannel-btn" style={{backgroundColor: selectedIndex === index ? "#010b13" : "transparent"}} key={item.name} onClick={()=>{
            updateSelectedIndex(index);
            navigate(item.to);
            
        }}>
        <div className="side-pannel-icon" style={{color: selectedIndex === index ? "white" : "#010b13"}}>
            {item.icon}
        </div>
        <p className="side-pannel-name" style={{color: selectedIndex === index ? "white" : "#010b13"}}>
            {item.name}
        </p>

        </button>)
    }

    </div>
}