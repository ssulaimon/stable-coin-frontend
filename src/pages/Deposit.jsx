import { allowedAssets } from "../utils/const/assets"
import { useState } from "react"
import { ActiveDropdown } from "../components/reusable/ActiveDropdown";
import { DropdownItem } from "../components/reusable/DropdownItem";
import "../styles/appPage/Deposit.css"
import deposit from "../assets/deposit.svg";
import { Input } from "../components/reusable/Input";
import { SendTransactionButton } from "../components/reusable/SendTransactionButton";

export function Deposit(){
    const [selectedAsset, updateSelectedAsset] = useState(allowedAssets[0]);
    const [showDropdown, updateShowDropdown] = useState(false);

    const style = {
        opacity: showDropdown ? "1": "0",
        visibility: showDropdown ? "visible": "hidden",
        minHeight: showDropdown ? "100px": "0px"
    }

    return <div>
        <h3 className="section-title">
            DEPOSIT
        </h3>
        <div className="input-main-container">
        <form onSubmit={(event)=>{
            event.target.preventDefault
        }}
    
        
        >
            <div id="asset-select-main-container">
           <ActiveDropdown data={selectedAsset} onTap={()=>{
        updateShowDropdown((currentState)=> !currentState);
           }}/>
           <div id="asset-drop-down-con" style={style}>
            {
                allowedAssets.map((item)=> <DropdownItem data={item} key={item.name} onTap={()=>{
                    updateSelectedAsset(item);
                    updateShowDropdown((currentState)=>!currentState);
                }}/>)
            }
           </div>
            </div>
            <img src={deposit} alt=""  className="action-icons"/>
<Input placeHolder={"Amount"}/>
<SendTransactionButton/>
        </form>
        </div>
    </div>
}