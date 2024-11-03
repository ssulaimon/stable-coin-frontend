import exact from "prop-types-exact";
import PropTypes from "prop-types";
export const ActionButton = (props)=>{
    return <button style={{
        display: "block",
        width: "100%",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "10px",
        border: "none",
        fontWeight: "bold"
    }} >
{
    props.name
}
    </button>
}

ActionButton.propTypes = exact({
    name: PropTypes.string.isRequired
})