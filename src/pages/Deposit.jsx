import { Dropdown } from "../components/reusable/Dropdown"
import { allowedAssets } from "../utils/const/assets";
import { useState,useContext } from "react";
import depositIcon from "../assets/app/deposit.svg"
import { Input } from "../components/reusable/Input";
import { AssetPrice } from "../utils/context/Contexts";
import { useAppKitAccount } from "@reown/appkit/react";
import {ClipLoader } from "react-spinners"
export const Deposit = ()=>{
    const { address, isConnected } = useAppKitAccount()

    const [selectedAsset, updateSelectedAsset] = useState(allowedAssets[0]);
    const [inputError, updateInvalidValue] = useState(false);
    const [isLoading, updateIsLoading] = useState(false);
    const [converter, updateConverter] = useState("");
    const conversionStyle = {
        color: inputError ? "#e62e05": "#C9C6C6",
        fontSize:"10px",
        marginTop: "5px"
    }
    const assetPrice = useContext(AssetPrice);
    function onInputChange(value){
        if(isNaN(value.target.value) ){
            updateInvalidValue(true);
            updateConverter("Invalid Input");
        }else{
            const depositValue  = value.target.value;
            updateInvalidValue(false);
           if(assetPrice.wETHPrice === 0 || assetPrice.wBTCPrice === 0){
            updateConverter("Cannot Get Value");
           }else{
            if(selectedAsset.name === "WBTC"){
                const AmountInUsd = Number(depositValue) * assetPrice.wBTCPrice;
                updateConverter(`$${(AmountInUsd).toLocaleString()}`);
            }else{
                const AmountInUsd = Number(depositValue) * assetPrice.wETHPrice;
                updateConverter(`$${(AmountInUsd).toLocaleString()}`);
            }
           }
        }

    }

    function onSubmit(data){
        data.preventDefault();
        try{
            updateIsLoading(true);
            const formDdata = new FormData(data.target);
            const depositValue = formDdata.get('depositValue');
            console.log(depositValue);
            if(!depositValue){
                updateIsLoading(false);
                return;
            }

        }catch(error){
            updateIsLoading(false)
        }

    }
    return <>
        <div className="main-action-container">
        <p className="action-title">
           DEPOSIT COLLATERAL
        </p>
        <div className="action-container">
        <form onSubmit={onSubmit}>
        <Dropdown selectedValue={selectedAsset}options={allowedAssets.filter((item)=> item.id != selectedAsset.id)} updateSelectedValue={updateSelectedAsset} />
        <img src={depositIcon} alt="mint-image" className="actions-icon" />
        <Input name={"depositValue"} onChange={onInputChange}/>
        <p style={conversionStyle}>
           {converter}
        </p>
        <button type="submit" className="submit-btn" disabled={isConnected && !inputError && !isLoading? false : true}style={{marginTop: "20px"}}>
          {
            isLoading ? <ClipLoader size={"20px"}/> : <span>
            Deposit
            </span>
          }
        </button>
        </form>

        </div>

        </div>
    </>
}