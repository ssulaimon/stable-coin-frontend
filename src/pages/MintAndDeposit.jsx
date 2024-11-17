import { Dropdown } from "../components/reusable/Dropdown"
import { allowedAssets } from "../utils/const/assets";
import { useState,useContext } from "react";
import { Input } from "../components/reusable/Input";
import depositAndMintIcon from "../assets/app/depositAndMint.svg"
import { AssetPrice } from "../utils/context/Contexts";
import { useAppKitAccount } from "@reown/appkit/react";
import { ClipLoader } from "react-spinners";

export const MintAndDeposit = ()=>{
    const { address, isConnected } = useAppKitAccount()

    const [selectedAsset, updateSelectedAsset] = useState(allowedAssets[0]);
    const [inputError, updateInvalidValue] = useState(false);
    const [mintInputError, updateMintInputError] = useState(false);
    const [converter, updateConverter] = useState("");
    const [isLoading, updateIsLoading] = useState(false);
    const assetPrice = useContext(AssetPrice);

    function onSubmit(data){
 data.preventDefault(); 
 try{
    updateIsLoading(true);
    const formData = new FormData(data.target);
    const depositAssetValue = formData.get('depositValue');
    const mintValue = formData.get('mintValue');
    if(!depositAssetValue || !mintValue){
        updateIsLoading(false);
        return;
    }
    console.log(mintValue);
    console.log(depositAssetValue);
 } catch(error){
    updateIsLoading(false);
    console.log(error);
 }
    }
    function onInputChange(value){
        if(isNaN(value.target.value) ){
            updateInvalidValue(true);
            updateConverter("Invalid Input");
        }else{
            updateInvalidValue(false);
            const assetDepositValue = value.target.value;
            if(assetPrice.wETHPrice === 0 || assetPrice.wBTCPrice === 0 ){
                updateConverter("0");
                return;
            }
            if(selectedAsset.name === "WBTC"){
                const valueInUsd = (Number(assetDepositValue) * assetPrice.wBTCPrice).toLocaleString();
                updateConverter(`$${valueInUsd}`);

            }else{
                const valueInUsd = (Number(assetDepositValue) * assetPrice.wETHPrice).toLocaleString();
                updateConverter(`$${valueInUsd}`);
            }

        }

    }

    function mintInputOnChange(value){
        if(isNaN(value.target.value)){
            updateMintInputError(true);
        }else{
            updateMintInputError(false);
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

<form onSubmit={onSubmit}>
<Dropdown selectedValue={selectedAsset}options={allowedAssets.filter((item)=> item.id != selectedAsset.id)} updateSelectedValue={updateSelectedAsset} />
<Input name={"depositValue"} onChange={onInputChange}/>
<p style={conversionStyle}>
           {converter}
        </p>
        <img src={depositAndMintIcon} alt="mint-image" className="actions-icon" />
        <Input name={"mintValue"} ticker={"USDN"} onChange={mintInputOnChange}/>
        {mintInputError ? <p className="input-error">Invalid value</p>: <span></span>}
        <button type="submit" className="submit-btn" disabled={isConnected && !inputError && !isLoading ? false : true}style={{marginTop: "20px"}}>
           {
            isLoading ? <ClipLoader size={"20px"}/> : <span>
            Deposit And Mint
            </span>
           }
        </button>
</form>
</div>
        {isConnected ? <span></span>: <p className="connect-wallet-error">Please Connect Wallet</p>}

        </div>
    </>
}