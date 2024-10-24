import "../../styles/landingPage/HowItWorks.css";
import { StepsModel } from "../../utils/models/StepsMode";
import { useState } from "react";
import { PiHandDepositFill } from "react-icons/pi";
import { SiLinuxmint } from "react-icons/si";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdOutlineRedeem } from "react-icons/md";




export function HowItWorks(){
    const steps = [
      new  StepsModel("STEP 01", "Deposit", "BTC, ETH AND MORE AS A COLLATERAL", <PiHandDepositFill size={90}/>),
      new StepsModel('STEP 02', 'Mint', 'MINT USDNEXUS BACKED UP BY YOUR COLLATERAL', <SiLinuxmint size={90}/>),new StepsModel('STEP 03', 'Explore', 'EXPLORE DEFI, DEXES USING USDNEXUS SUPERCHARGING YOUR EXPERIENCE', <MdOutlineElectricalServices size={90}/>),
      new StepsModel('STEP 04', 'Redeem Collateral', 'BURN USDNEXUS TO REDEEM CRYPTO COLLATERAL DEPOSITED', <MdOutlineRedeem/>)
    ];
    const [index, updateIndex] = useState(0);
    const chainsDetails = [{title: "30+ Assets", details: "WETH,WBTC AND MORE"}, {title: "15+ Platforms", details: "UNISWAP,AAVE AND MORE"}, {title: "10+Chains", details: "ETH, POLYGON AND MORE"}];

    function check(){
        if(index === 0){
            return 'step-one';
        }else if(index === 1){
            return 'step-two';
        }else if (index === 2 ){
            return 'step-three';
        }else{
            return 'step-four';
        }
    }

    function updateSteps(){
        if(index === steps.length -1){
            return;
        }else{
            updateIndex((currentValue)=> currentValue+1);
        }
    }
    return <div>
        <h1 id="how-title">
            How it Works
        </h1>
        <div id="progress-container" className={`${check()}`}>
        <h4>
            {steps[index].stepNumber}
        </h4>
        <div id="steps-item" onClick={updateSteps}>
            {steps[index].icon}
            <p id="step-title">
                {steps[index].stepName}

            </p>
            <p id="step-details">
                {steps[index].stepDetails}
            </p>
        </div>
        <p>Click</p>
        </div>

        <div id="chains-details-main-container">
            {chainsDetails.map((item)=> <div key={item.title} id="chains-details-card">
                <h6>
                    {item.title}
                </h6>
                <p>
                    {item.details}
                </p>
            </div>)}
        </div>
        
    </div>

}