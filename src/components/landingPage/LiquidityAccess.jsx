import liquidityImage from "../../assets/liquidity.svg";
import "../../styles/landingPage/LiquidityAccess.css"
import { LargeButton } from "../reusable/LargeButton";
export function LiquidityAccess(){
    return <div
    id="liquidity-container">
       <div>
       <h1 className="liquidity-title">
        Access to <br /> Ethereumchain Liquidity 
        </h1>
        <p className="liquidity-details">
        EFFORTLESSLY TRANSFER USDN ACROSS
NETWORKS WITH ETHEREUM BRIDGE,
WITHOUT FEES OR HIDDEN COSTS
        </p>
       </div>
       <div>
        <img src={liquidityImage} alt="graph-image" id="liquidity-image" />
        <h1 className="liquidity-title">
        Market-driven<br/>
        Savings Rates 
        </h1>
        <p className="liquidity-details">
        UNBIASED AND TRANSPERENT SAVINGS RATE
        DYNAMICALLY ADJUSTED TO THE MARKET CONDITIONS
        </p>
        <LargeButton title={"DOCUMENTATION"} backgroundColor={"white"}/>
       </div>
    </div>
}