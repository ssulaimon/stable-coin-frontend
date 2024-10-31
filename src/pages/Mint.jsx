import { Input } from "../components/reusable/Input"
import { SendTransactionButton } from "../components/reusable/SendTransactionButton"
import mint from "../assets/mint.svg"
export function Mint(){
    return <div style={{color: "white"}}>
     <h3 className="section-title">
            MINT
        </h3>
      <div className="input-main-container">
        <form onSubmit={(event)=>{
            event.target.preventDefault
        }}
    
        
        >
        
<Input placeHolder={"USDN Amount"}/>
            <img src={mint} alt=""  className="action-icons"/>
<SendTransactionButton/>
        </form>
        </div>
    </div>
}