import { Dropdown } from "../components/reusable/Dropdown"
import { allowedAssets } from "../utils/const/assets";
import { useState,useContext } from "react";
import { Input } from "../components/reusable/Input";
import depositAndMintIcon from "../assets/app/depositAndMint.svg"
import { AssetPrice } from "../utils/context/Contexts";
export const MintAndDeposit = ()=>{
    const [selectedAsset, updateSelectedAsset] = useState(allowedAssets[0]);
    const [inputError, updateInvalidValue] = useState(false);
    const [converter, updateConverter] = useState( "");
    const connection = useContext(AssetPrice);
    function onInputChange(value){
        if(isNaN(value.target.value) ){
            updateInvalidValue(true);
            updateConverter("Invalid Input");
        }else{
            updateInvalidValue(false);
            updateConverter(value.target.value);
        }

    }
    const conversionStyle = {
        color: inputError ? "#e62e05": "#C9C6C6",
        fontSize:"10px",
        marginTop: "5px"
    }
    return <>
        <div className="main-action-container">
<div className="action-container">

<form >
<Dropdown selectedValue={selectedAsset}options={allowedAssets.filter((item)=> item.id != selectedAsset.id)} updateSelectedValue={updateSelectedAsset} />
<Input name={"depositValue"} onChange={onInputChange}/>
<p style={conversionStyle}>
           {converter}
        </p>
        <img src={depositAndMintIcon} alt="mint-image" className="actions-icon" />
        <Input name={"mintValue"} ticker={"USDN"}/>
        <button type="submit" className="submit-btn" disabled={connection.connected && !inputError ? false : true}style={{marginTop: "20px"}}>
            Deposit And Mint
        </button>
</form>
</div>
        </div>
    </>
}