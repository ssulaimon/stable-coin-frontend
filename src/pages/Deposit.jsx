import { allowedAssets } from "../utils/const/assets";
import { useState } from "react";
import { Dropdown } from "../components/reusable/Dropdown";
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

        </div>
    </div>
}