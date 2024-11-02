import exact from "prop-types-exact";
import PropTypes from "prop-types";
import "../../styles/reusable/Menu.css";
export const MenuButton = (props)=>{
    const butonStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        backgroundColor: props.isActive ? "#010B13": "transparent",
        border: "none",
        margin: "15px 0",
        padding: "5px",
        borderRadius: "5px"

        
    };
    const iconStyle ={
        color: props.isActive ? "white": "#010B13"
    }

    return <button style={butonStyle} onClick={props.onClicked} className="menu-btn">
    <span style={iconStyle}>
    {
        props.value.icon
    }
    </span>
    <p className="medium-text" style={iconStyle}>
        {
            props.value.name
        }
    </p>
   
    </button>
}

MenuButton.propTypes = exact({
    value: PropTypes.shape(exact({
name: PropTypes.string.isRequired,
icon: PropTypes.element.isRequired,
path: PropTypes.string.isRequired
    })).isRequired,
    isActive: PropTypes.bool.isRequired,
    onClicked: PropTypes.func
})