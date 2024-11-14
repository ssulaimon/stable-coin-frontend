import exact from "prop-types-exact";
import PropTypes from "prop-types";
export const Input = (props)=><div className="value-input-main-container">
   
        <input type="text" className="value-input" name={props.name} onChange={props.onChange}/>
       {
        props.ticker ?  <p className="ticker">
            {props.ticker}
        </p>: <span></span>
       }
    </div>
Input.propType = exact({
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string,
    onChange: PropTypes.func
})
