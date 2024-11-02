import dropdownIcon  from "../../assets/app/dropdown.svg";
import "../../styles/reusable/Dropdown.css";
import exact from "prop-types-exact"
import PropTypes from "prop-types"
import { useState } from "react";
export const Dropdown = (props)=>{
    const [showDropdown, updateShowDropdown] = useState(false);
    const spanStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px"
    }
    const options = props.options.filter((item) => item !== props.selectedValue);
    return <div className="drop-down-main-container">
        <button className="active-value" onClick={()=>{
            updateShowDropdown((currentState)=> !currentState);
        }   }>
<span style={spanStyle}>
    <p className="medium-text ">
    {props.selectedValue.name}
    </p>
    <img src= {props.selectedValue.image}alt="" className="asset-image" />
</span>
<img src={dropdownIcon} alt="" className="drop-down-icon"/>
        </button>
      <div className="option-main-container" style={{
        visibility: showDropdown ? "visible": "hidden",
        opacity: showDropdown ? "1": "0"
      }}>
      {
            options.map((item)=> <div key={item.name} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "5px 0", backgroundColor: "white", padding: "8px",  cursor: "pointer"} } onClick={()=>{
                props.optionClicked(item);
                updateShowDropdown((currentState)=> !currentState);
            }}>
                <p className="medium-text">
                    {item.name}
                </p>
                <img src={item.image} alt="" className="asset-image"/>
            </div>)
        }
      </div>
    </div>
}
Dropdown.propTypes = exact({
    selectedValue: PropTypes.shape(exact({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired

    })),
    options: PropTypes.arrayOf(PropTypes.shape(exact(
        {
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
    
        }
    ))).isRequired,
    optionClicked: PropTypes.func.isRequired
})