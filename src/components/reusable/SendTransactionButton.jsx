import exact from "prop-types-exact"
import PropTypes from "prop-types";
export function SendTransactionButton(props){
    return <button onClick={props.onTap} style={{
backgroundColor: "white", color: "black", width: "100%", textAlign: "center",   height: "50px", border: "none", fontSize: "16px", marginTop: "30px", marginBottom: "10px", borderRadius: "20px", fontWeight: "600"}}>
        Send Transaction
    </button>
}

SendTransactionButton.propTypes = exact(
    {
        onTap: PropTypes.func
    }
)