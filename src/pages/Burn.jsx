import { CustomInput } from "../components/reusable/Custominput";
import { ActionButton } from "../components/reusable/ActionButton";
import burn from "../assets/app/burn.svg";


export const Burn = ()=>{
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
        <img src={burn} alt="" style={{
            display:"block",
            margin: "20px auto"
        }}/>
        <ActionButton name={"BURN USDN"}/>
        </div>
    </div>
}