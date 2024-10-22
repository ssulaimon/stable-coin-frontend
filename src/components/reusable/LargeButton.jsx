import exact from "prop-types-exact";
import PropTypes from "prop-types";
export function LargeButton(props){
    return <button style={{backgroundColor:`${props.backgroundColor}`, textAlign: "start", display:"block", padding: "10px", width: "100%", border:"none", color: `${props.color ?? "black"}` }}>
{props.title}
        
    </button>
}
LargeButton.propTypes = exact({
    title: PropTypes.string.isRequired,
    backgroundColor:PropTypes.string.isRequired,
    color: PropTypes.string
})