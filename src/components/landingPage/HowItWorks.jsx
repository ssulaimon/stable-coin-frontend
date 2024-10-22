import "../../styles/landingPage/HowItWorks.css";
import { StepsModel } from "../../utils/models/StepsMode";
import { useState } from "react";
import { PiHandDepositFill } from "react-icons/pi";

export function HowItWorks(){
    const steps = [
      new  StepsModel("STEP 01", "Deposit", "BTC, ETH AND MORE AS A COLLATERAL", <PiHandDepositFill size={90}/>)
    ];
    const [index, updateIndex] = useState(0);
    const chainsDetails = [{title: "30+ Assets", details: "WETH,WBTC AND MORE"}, {title: "15+ Platforms", details: "UNISWAP,AAVE AND MORE"}, {title: "10+Chains", details: "ETH, POLYGON AND MORE"}];

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
        <div id="progress-container">
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