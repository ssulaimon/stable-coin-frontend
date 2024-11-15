import exact from "prop-types-exact"
import PropTypes from "prop-types"
export const AssetName = (props)=>{
    const style = {
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        color: "white",
        alignItems: "center"
        
    }
    return <span style={style}>
        <p>
{
    props.name
}
        </p>
        <span style={{
            backgroundColor: props.color
            ,
            borderRadius: "50%",
            height: "15px",
            width: "15px",
        }}>

        </span>
    </span>
}

AssetName.propType = exact({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
})