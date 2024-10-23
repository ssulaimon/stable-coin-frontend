import { FaqCard } from "../reusable/FaqCard"
import { FaqModel } from "../../utils/models/FaqModel"
import "../../styles/landingPage/Faq.css";
const faqs = [ new FaqModel("What is USDNDao", "Lorem ipsum dolor sit amet. Aut odio maxime aut voluptas enim rem dolores voluptatem est vero voluptatum! Ut animi quisquam ut consectetur ullam qui consequatur omnis Lorem ipsum dolor sit  amet. Aut odio maxime aut voluptas enim rem dolores voluptatemest vero voluptatum! Ut animi quisquam ut consectetur ullam qui."),new FaqModel("What is USDNDao", "Lorem ipsum dolor sit amet. Aut odio maxime aut voluptas enim rem dolores voluptatem est vero voluptatum! Ut animi quisquam ut consectetur ullam qui consequatur omnis Lorem ipsum dolor sit  amet. Aut odio maxime aut voluptas enim rem dolores voluptatemest vero voluptatum! Ut animi quisquam ut consectetur ullam qui."), new FaqModel("What is USDNDao", "voluptas enim rem dolores voluptatem est vero voluptatum! Ut animi quisquam ut consectetur ullam qui consequatur omnis Lorem ipsum dolor sit  amet. Aut odio maxime aut voluptas enim rem dolores voluptatemest vero voluptatum! Ut animi quisquam ")]
export function Faq(){
    return <div id="faq-main-container">
    <h3 id="faq-main-question">
    Frequently Asked Questions 
    </h3>
        {faqs.map((item, index)=> <FaqCard faq={item} key={index}/>)}
    </div>
} 