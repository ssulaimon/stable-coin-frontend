import { CustomInput } from "../components/reusable/CustomInput";
import { ActionButton } from "../components/reusable/ActionButton";
import mintIcon from "../assets/app/mint.svg";


export const Mint = ()=>{
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px"
    

    }
    
   
    return <div style={style}>
         <p className="section-title">
    MINT
        </p>

        <div className="action-container">
        <CustomInput placeHolder="USDN Amount"/>
        <img src={mintIcon} alt="" style={{
            display:"block",
            margin: "20px auto"
        }}/>
        <ActionButton name={"MINT USDN"}/>
        </div>
    </div>
}