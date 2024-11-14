import { useLoaderData } from "react-router-dom"
import { Input } from "../components/reusable/Input";
import mintIcon from "../assets/app/mint.svg"
import { useContext } from "react";
import { AssetPrice } from "../utils/context/Contexts";
import { useState } from "react";
export const Mint = ()=>{
    const loader = useLoaderData();
const connection = useContext(AssetPrice);
const [inputError, updateInputError] = useState(false);
function onChange (value){
    if(isNaN(value.target.value)){
updateInputError(true);
    }else{
        updateInputError(false);
    }
}
    return <>
        <div className="main-action-container">
        <p className="action-title">
            MINT USDN
        </p>
        <div className="action-container">
       
        <form >
        
        <Input name="mintAmount" ticker={"USDN"} onChange={onChange}/>
        {inputError ? <p className="input-error">Invalid value</p>: <span></span>}
        <img src={mintIcon} alt="mint-image" className="actions-icon" />

<button type="submit" className="submit-btn" disabled={connection.connected && !inputError ? false : true}>
            Done
        </button>
        </form>
      
        </div>
{connection.connected  ? <span></span>: <p className="connect-wallet-error">Please Connect Wallet</p>}
        </div>
    </>
}