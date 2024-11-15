import "../styles/app/DashBoardStyle.css"
import { AssetName } from "../components/reusable/AssetName"
import { AssetDetails } from "../components/reusable/AssetDetails"
import weth from "../assets/app/weth.svg"
import wbtc from "../assets/app/wbtc.svg"
import more from "../assets/app/more.svg"
import usdn from "../assets/app/usdn.svg";
import { useAppKitAccount } from "@reown/appkit/react";
import { useState } from "react"
export const Dashboard = ()=>{
    const [showGuage, updateShowGuage] = useState(false);
    const { address, isConnected } = useAppKitAccount()
    const titleStyle = {
        color: "white",
        fontWeight: "normal" ,
        marginTop: "20px",
        marginBottom: "10px"
    }
    return <>
        <div id="dash-board-main-container">
        <span id="account-detail-container">
            <p>
                DASHBOARD
            </p>
          
              { address ? <span className="address-container">{address}</span>: <span ></span>}
          
        </span>
        <div id="dash-board-container-one">
<div id="overview-container">
<h2 style={{fontWeight: "normal"}}>
    Overview
</h2>
<p style={{
    fontSize: "10px"
}}>
    Total portfolio balance
</p>
<h1 style={{fontWeight: "normal", fontSize: "39px", marginTop: "10px"}}>
$35,000
</h1>

<div style={{backgroundColor: "red", height: "200px", width: "200px", margin: "20px auto", borderRadius: "50%"}}>

</div>
<span style={{display: "flex", flexDirection: "row", justifyContent: "center", gap:"20px"}}>

<AssetName name={"WETH"} color={"#4A3AFF"}/>
<AssetName name={"WBTC"} color={"#F0E5FC"}/>
</span>
</div>
<div id="portfolio-main-container">
<h2 style={titleStyle}>
    Collateral Balance In Proptocol
</h2>
<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "10px"}}>
    <AssetDetails assetName={"Wrapped Ethereum Balance"} assetImage={weth} balance={"10WETH"}/>  <AssetDetails assetName={"Wrapped Bitcoin Balance"} assetImage={wbtc} balance={"10WBTC"}/> 
</div>
<h2 style={titleStyle}>
    Collateral In USD Value
</h2>
<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "10px"}}>
    <AssetDetails assetName={"Wrapped Ethereum Balance"} assetImage={weth} balance={"10WETH"}/>  <AssetDetails assetName={"Wrapped Bitcoin Balance"} assetImage={wbtc} balance={"10WBTC"}/> 
</div>
</div>
        </div>
<span id="liquidation-guage-text-container">
<h2 >
    Liquidation Guage
</h2>
<img src={more} alt="question-mark" onClick={()=> updateShowGuage((currentState)=> !currentState)}/>
<div id="about-guage" className={showGuage ? "show-guage": "hide-guage"}>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, necessitatibus!
</div>

</span>

<div id="dummy-guage-container">

</div>

<h2 style={{
    fontWeight: "normal",
    color: "white",
    marginTop: "50px"
}}>
    USDNexus
</h2>

<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "10px", flexWrap: "wrap"}}>
    <AssetDetails assetName={"Minted USDNexus"} assetImage={usdn} balance={"10USDN"}/>  <AssetDetails assetName={"Minted USDNexus"} assetImage={usdn} balance={"10USDN"}/>
     <AssetDetails assetName={"Minted USDNexus"} assetImage={usdn} balance={"10USDN"}/>  <AssetDetails assetName={"Minted USDNexus"} assetImage={usdn} balance={"10USDN"}/> 
</div>

        </div>
    </>
}