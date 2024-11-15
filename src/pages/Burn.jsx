import { useState, useContext } from "react";
import { Input } from "../components/reusable/Input";
import burnIcon from "../assets/app/burn.svg"
import { AssetPrice } from "../utils/context/Contexts";
import { useAppKitAccount } from "@reown/appkit/react";

export const Burn = ()=>{
    const { address, isConnected, caipAddress, status } = useAppKitAccount()

    const [inputError, updateInputError] = useState(false);
    const connection = useContext(AssetPrice);
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
<Input name="mintAmount" ticker={"USDN"} onChange={onChange}/>
{inputError ? <p className="input-error">Invalid value</p>: <span></span>}
<img src={burnIcon} alt="mint-image" className="actions-icon" />
<button type="submit" className="submit-btn" disabled={isConnected && !inputError ? false : true}>
            Burn
        </button>
</div>
{
    isConnected ? <span></span> : <p style={{color: "white"}}>Please Connect Wallet</p>
}
        </div>
    </>
}