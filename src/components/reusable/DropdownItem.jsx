import "../../styles/reusable/DropdownItem.css"
import exact from "prop-types-exact"
import PropTypes from "prop-types";
export function DropdownItem(props){
    return <div className="drop-down-item-main-container" onClick={props.onTap}>
        <p className="drop-down-name">
            {props.data.name}
        </p>
        <img src={props.data.image} alt="" className="drop-down-icon" />
    </div>
}

DropdownItem.propTypes = exact({
    data: PropTypes.shape(exact({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })).isRequired,
    onTap: PropTypes.func
})