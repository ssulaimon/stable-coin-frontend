import exact from "prop-types-exact"
import PropTypes from "prop-types";
import "../../styles/reusable/ActiveDropdown.css"
import dropdownIcon from "../../assets/dropdown.svg";
export function ActiveDropdown(props){
    return <div className="active-main-container" onClick={props.onTap}>
    <span className="active-detail-container">
    <img src={props.data.image} alt="" className="active-asset-icon"/>
        <p className="active-drop-down-name">
            {props.data.name}
        </p>
    </span>
    <img src={dropdownIcon} alt="" />
    </div>
}
ActiveDropdown.propTypes = exact({
    data: PropTypes.shape(exact({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,
    onTap: PropTypes.func
})