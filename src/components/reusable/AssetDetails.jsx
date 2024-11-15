import exact from "prop-types-exact";
import PropTypes from "prop-types"
import "../../styles/reusable/AssetsDetails.css"
export const AssetDetails = (props)=>{
    return <>
        <div className="assets-details-main-container">
            <p className="asset-full-name">
                {props.assetName}
            </p>
            <img src={props.assetImage}  height={"100px"} width={"100px"}/>
            <p className="asset-balance">
{
    props.balance
}
            </p>
        </div>
    </>
}
AssetDetails.propType = exact({
    assetName: PropTypes.string.isRequired,
    assetImage: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
})