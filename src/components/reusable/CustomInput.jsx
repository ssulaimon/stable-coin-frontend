import "../../styles/reusable/Custominput.css";
import exact from "prop-types-exact";
import PropTypes from "prop-types";
export const CustomInput = (props)=>{
    return <input type="text" className="input" placeholder={props.placeHolder} style={{
        marginTop: props.marginTop
    }}/>
}
CustomInput.propTypes = exact({
    placeHolder: PropTypes.string.isRequired,
    marginTop: PropTypes.string
})