import { useState, useContext } from "react";
import { Input } from "../components/reusable/Input";
import burnIcon from "../assets/app/burn.svg"
import { AssetPrice } from "../utils/context/Contexts";
import { useAppKitAccount } from "@reown/appkit/react";
import {ClipLoader } from "react-spinners"


export const Burn = ()=>{
    const { address, isConnected } = useAppKitAccount()

    const [inputError, updateInputError] = useState(false);
    const [isLoading, updateIsLoading] = useState(false)
    const assetPrice = useContext(AssetPrice);
    function onSubmit(event){
        event.preventDefault();
        try{
            updateIsLoading(true);
    const formdata = new FormData(event.target);
    const mintValue =formdata.get('mintAmount');
    if(!mintValue){
        updateIsLoading(false);
        return;
    }
        }catch(error){
    updateIsLoading(false);
            throw error;
        }
    }
    function onChange (value){
        if(isNaN(value.target.value)){
    updateInputError(true);
        }else{
            updateInputError(false);
        }
    }
    return <>
        <div className="main-action-container">
<div className="action-container">
<form onSubmit={onSubmit}>
<p style={{fontSize:"20px", color: "white"}}>
            Burn
        </p>
        <p style={{fontSize:"12px", color: "#9CA3AF", marginBottom: "20px"}}>
           Limit liquidation experience
        </p>
<Input name="mintAmount" ticker={"USDN"} onChange={onChange}/>
{inputError ? <p className="input-error">Invalid value</p>: <span></span>}
<img src={burnIcon} alt="mint-image" className="actions-icon" />
<button type="submit" className="submit-btn" disabled={isConnected && !inputError && !isLoading? false : true}>
{
    isLoading ? <ClipLoader size={"20px"}/>: <span>
        Mint USDN
    </span>
}
        </button>
</form>
</div>
  {isConnected ? <span></span>: <p className="connect-wallet-error">Please Connect Wallet</p>}
        </div>
    </>
}