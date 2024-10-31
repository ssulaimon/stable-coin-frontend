import exact from "prop-types-exact"
import PropTypes from "prop-types";
import "../../styles/reusable/Input.css"
export function Input(props){
    return <input type="text" className="input" placeholder={props.placeHolder} style={{marginTop: props.marginTop}}/>
}
Input.propType = exact({
    placeHolder: PropTypes.string.isRequired,
    marginTop: PropTypes.string
})