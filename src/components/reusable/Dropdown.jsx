import "../../styles/reusable/Dropdown.css"
import wbtc from "../../assets/app/wbtc.svg";
import dropdownIcon from "../../assets/app/dropdown.svg"
import { useState } from "react";
import PropTypes from "prop-types"
import exact from "prop-types-exact"

export const Dropdown = (props)=>{
    const [showoptions, updateShowOptions] = useState(false);
    function dropdownOnClicked(){
updateShowOptions((currentState)=> !currentState);
    }
    return <div className="drop-down-main-container">
<button className="selected" type="button" onClick={dropdownOnClicked}>
<span className="selected-value-container">
<img src={props.selectedValue.image} alt="" />
<p>
    {props.selectedValue.name}
</p>
</span>
<img src={dropdownIcon} alt="drop-down-icon" />
</button>
<div className={`options-main-container ${showoptions ? "show-options" :"hide-options"}`}>
{
props.options.map((item)=> <span className="selected-value-container" style={{backgroundColor: "white",padding: "5px", margin: "5px 0px"}} key={item.id} onClick={()=>{
    props.updateSelectedValue(item);
    updateShowOptions((currentState)=> !currentState);
}}>
<img src={item.image} alt="" />
<p>
    {item.name}
</p>
</span>)
}

</div>
    </div>
}


Dropdown.propType = exact({
    selectedValue: PropTypes.shape(exact({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired
    })).isRequired,
    options: PropTypes.arrayOf(PropTypes.shape(exact({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id:PropTypes.string.isRequired
    })).isRequired).isRequired,
    updateSelectedValue: PropTypes.func.isRequired
})