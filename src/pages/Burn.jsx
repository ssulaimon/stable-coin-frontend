import { useState, useContext } from "react";
import { Input } from "../components/reusable/Input";
import burnIcon from "../assets/app/burn.svg"
import { AssetPrice } from "../utils/context/Contexts";

export const Burn = ()=>{
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
<button type="submit" className="submit-btn" disabled={connection.connected && !inputError ? false : true}>
            Burn
        </button>
</div>
        </div>
    </>
}