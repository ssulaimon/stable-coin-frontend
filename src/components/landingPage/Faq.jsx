import { FaqCard } from "../reusable/FaqCard"
import { FaqModel } from "../../utils/models/FaqModel"
import "../../styles/landingPage/Faq.css";
const faqs = [ new FaqModel("What is USDNDao?", "Our decentralized stablecoin platform allows users to deposit various types of collateral, like Ethereum or other supported assets, and mint stablecoins against their deposited assets "),new FaqModel("What types of collateral can I use to mint the stablecoin, and how is my collateral protected?", "Our platform supports a variety of collateral types, including popular assets like Wrapped Ethereum and other selected cryptocurrencies. Each type of collateral has a specific minimum collateralization ratio, ensuring that your stablecoin minting is securely backed. To protect the system and users, the platform regularly monitors collateral levels."), new FaqModel(" What happens if the value of my collateral falls? Will I lose my stablecoin or collateral? ", "If the value of your collateral falls below the platform’s minimum collateralization ratio, your position may become eligible for liquidation to protect the stability of the system")]
export function Faq(){
    return <div id="faq-main-container">
    <h3 id="faq-main-question">
    Frequently Asked Questions 
    </h3>
        {faqs.map((item, index)=> <FaqCard faq={item} key={index}/>)}
    </div>
} 