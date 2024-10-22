import "../../styles/landingPage/Discovery.css";
import cartesi from "../../assets/cartesi.svg";
import { LargeButton } from "../reusable/LargeButton";
export function Discovery(){
    const protocolDetails = ["Leverage the Strengths of Reward-Beating Collateral", "The DUSD Saving Rate", "Bridging Blockchains Seamlessly", "Establishing a DeFi Benchmark"]
    return <div>
        <div id="dicovery-container-one">
        <img src={cartesi} alt="cartesi-image" id="cartesi-image" />
        <div id="protocol-main-container">
            <h4 style={{color: "white"}} id="protocol-title">
                Discover <br />
                USDNDao Protocol
            </h4>
            <div id="protocol-discovery-container">
            {protocolDetails.map((item, index)=> <div key={index} className="protocol-card">
            {item}
            </div>)}

            </div>
        </div>
        </div>

        <div id="protocol-security-main-container">
            <div className="security-card">
            <h4 className="security-title">
            Audited for Your <br /> Security
            </h4>
            <p className="security-details">
            ENSURING TRUST WITH MULTIPLE AUDITS 
            BY TOP BLOCKCHAIN SECURITY FIRMS
            </p>
<LargeButton title={"VIEW SECURITY REPORTS"} backgroundColor={"black"} color={"white"}/>
            </div>
            <div>
            <h4 id="security-main-title">
            Robust Security<br />Measures
            </h4>
                <div className="security-card">
<h4 className="security-title"> Bug Bounty</h4>
<p className="security-details">
SECURE UP TO $500,000 REWARDS FOR 
INDENTIFYING BUGS OR VULNERABILITIES
</p>
<LargeButton title={"VIEW SECURITY REPORTS"} backgroundColor={"black"} color={"white"}/>
                </div>
            </div>
        </div>
    </div>
}