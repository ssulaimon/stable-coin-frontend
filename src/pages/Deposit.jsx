import { allowedAssets } from "../utils/const/assets";
import { useState } from "react";
import { Dropdown } from "../components/reusable/Dropdown";
import depositIcon from "../assets/app/deposit.svg";
import { CustomInput } from "../components/reusable/CustomInput";
import { ActionButton } from "../components/reusable/ActionButton";
export const Deposit= ()=>{
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
    

    }
    
    const [selectedValue, updateSelectedValue] = useState(allowedAssets[0]); 
    return <div style={style}>
    <p className="section-title">
    DEPOSIT
        </p>
        <div className="action-container">
        <Dropdown selectedValue={selectedValue} options={allowedAssets} optionClicked={updateSelectedValue}/>
        <img src={depositIcon} alt="" style={{
            display:"block",
            margin: "20px auto"
        }}/>
<CustomInput placeHolder="Amount"/>
<p style={{color: "#C9C6C6", fontSize: "8px", paddingTop: "2px"}}>
    $60,000
</p>
<ActionButton name={"Deposit"}/>
        </div>
    </div>
}