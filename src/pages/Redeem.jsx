import { allowedAssets } from "../utils/const/assets";
import { useState,useContext } from "react";
import { Dropdown } from "../components/reusable/Dropdown"
import depositIcon from "../assets/app/deposit.svg"
import { Input } from "../components/reusable/Input";
import { AssetPrice } from "../utils/context/Contexts";
export const Redeem = ()=>{
    const [selectedAsset, updateSelectedAsset] = useState(allowedAssets[0]);
    const [inputError, updateInvalidValue] = useState(false);
    const [converter, updateConverter] = useState( "");
    const connection = useContext(AssetPrice);
    const conversionStyle = {
        color: inputError ? "#e62e05": "#C9C6C6",
        fontSize:"10px",
        marginTop: "5px"
    }
    function onInputChange(value){
        if(isNaN(value.target.value) ){
            updateInvalidValue(true);
            updateConverter("Invalid Input");
        }else{
            updateInvalidValue(false);
            updateConverter(value.target.value);
        }

    }
    return <>
        <div className="main-action-container">
<div className="action-container">
<Dropdown selectedValue={selectedAsset}options={allowedAssets.filter((item)=> item.id != selectedAsset.id)} updateSelectedValue={updateSelectedAsset} />
<img src={depositIcon} alt="mint-image" className="actions-icon" />
<Input name={"redeemValue"} onChange={onInputChange}/>
<p style={conversionStyle}>
           {converter}
        </p>
        <button type="submit" className="submit-btn" disabled={connection.connected && !inputError ? false : true}style={{marginTop: "20px"}}>
            Redeem
        </button>
</div>
        </div>
    </>
}