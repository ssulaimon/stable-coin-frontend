import "../../styles/reusable/FaqCard.css";
import exact from "prop-types-exact";
import Proptypes from "prop-types";
import { FaqModel } from "../../utils/models/FaqModel";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";



export function FaqCard(props){
      const [isExpanded, updateExpansion] = useState(false);
     const style = {maxHeight: isExpanded ? "300px": "0px", color: isExpanded ? "black": "white", visibility: isExpanded ? "visible": "hidden", opacity: isExpanded ? "1": "0"};
     const mainContainerStyle = {backgroundColor: isExpanded ? "white": "transparent"};
     const questionStyle = {color: isExpanded ? "black": "white"};
    return <div className="faq-card-main-container" onClick={()=> updateExpansion((currentState)=> !currentState)} style={mainContainerStyle}>
    <div className="faq-question-container">
    <h5 className="faq-question" style={questionStyle}>
        {props.faq.question}
    </h5>
    {isExpanded ? <MdOutlineKeyboardArrowUp color="black"/> : <RiArrowDropDownLine color="white"/>}
    </div>
    <div className="faq-answer" style={ style}>
        {props.faq.answer}
    </div>
    </div>
}

FaqCard.propTypes = exact({
     faq: Proptypes.instanceOf(FaqModel).isRequired
})