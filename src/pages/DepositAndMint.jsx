import { allowedAssets } from "../utils/const/assets";
import { useState } from "react";
import { Dropdown } from "../components/reusable/Dropdown";
import depositAnMintIcon from "../assets/app/depositAndMint.svg";
import { CustomInput } from "../components/reusable/CustomInput";
import { ActionButton } from "../components/reusable/ActionButton";
export const DepositAndMint= ()=>{
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
    DEPOSIT AND MINT
        </p>
        <div className="action-container">
        <Dropdown selectedValue={selectedValue} options={allowedAssets} optionClicked={updateSelectedValue}/>
        <CustomInput placeHolder="Amount" marginTop={"10px"}/>
        <p style={{color: "#C9C6C6", fontSize: "8px", paddingTop: "2px"}}>
    $60,000
</p>
        <img src={depositAnMintIcon} alt="" style={{
            display:"block",
            margin: "20px auto"
        }}/>

<CustomInput placeHolder="USDN Amount"/>


<ActionButton name={"Deposit"}/>
        </div>
    </div>
}