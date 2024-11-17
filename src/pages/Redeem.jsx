import { allowedAssets } from "../utils/const/assets";
import { useState,useContext } from "react";
import { Dropdown } from "../components/reusable/Dropdown"
import depositIcon from "../assets/app/deposit.svg"
import { Input } from "../components/reusable/Input";
import { AssetPrice } from "../utils/context/Contexts";
import { useAppKitAccount } from "@reown/appkit/react";
import { ClipLoader } from "react-spinners";

export const Redeem = ()=>{
    const { address, isConnected } = useAppKitAccount();
    const [isLoading,updateIsLoading] = useState(false)

    const [selectedAsset, updateSelectedAsset] = useState(allowedAssets[0]);
    const [inputError, updateInvalidValue] = useState(false);
    const [converter, updateConverter] = useState( "");
    const assetPrice = useContext(AssetPrice);
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
        const redeemValue = value.target.value;
        if(assetPrice.wETHPrice === 0 || assetPrice.wBTCPrice === 0 ){
            updateConverter("0");
            return;
        }
        if(selectedAsset.name === "WBTC"){
            const valueInUsd = (Number(redeemValue) * assetPrice.wBTCPrice).toLocaleString();
            updateConverter(`$${valueInUsd}`);

        }else{
            const valueInUsd = (Number(redeemValue) * assetPrice.wETHPrice).toLocaleString();
            updateConverter(`$${valueInUsd}`);
        }

        }

    }
    function onSubmit(data){
        data.preventDefault();
        try{
            updateIsLoading(true);
            const formData = new FormData(data.target);
            const redeemValue = formData.get('redeemValue');
            
            if(!redeemValue){
                updateIsLoading(false);
                return;
            }
            console.log(redeemValue);
         } catch(error){
            updateIsLoading(false);
            console.log(error);
         }

    }
    return <>
        <div className="main-action-container">
<div className="action-container">
<form onSubmit={onSubmit}>
<p style={{fontSize:"20px", color: "white"}}>
            Redeem
        </p>
        <p style={{fontSize:"12px", color: "#9CA3AF", marginBottom: "20px"}}>
            Get back funds
        </p>
<Dropdown selectedValue={selectedAsset}options={allowedAssets.filter((item)=> item.id != selectedAsset.id)} updateSelectedValue={updateSelectedAsset} />
<img src={depositIcon} alt="mint-image" className="actions-icon" />
<Input name={"redeemValue"} onChange={onInputChange}/>
<p style={conversionStyle}>
           {converter}
        </p>
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