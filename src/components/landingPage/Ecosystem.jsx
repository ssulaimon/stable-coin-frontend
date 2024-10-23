import "../../styles/landingPage/Ecosystem.css";
import { EcosystemModel } from "../../utils/models/EcosystemModel";
import aave from "../../assets/aave.svg"
import balancer from "../../assets/balancer.svg"
import maker from "../../assets/maker.svg"
import uniswap from "../../assets/uniswap.svg"
import lido from "../../assets/lido.svg"
import pancake from "../../assets/pancake.svg"
const ecosystem = [ new EcosystemModel(lido, "Lido", "Exchange your SETH for more stability"),new EcosystemModel( maker, "MakerDAO", "Earn Intrest by Lending and borrow against your USDN on MakerDAO"), new EcosystemModel(aave, "AAVE", "Earn Intrest by Lending and borrow against your USDN on AAVE"), new EcosystemModel(uniswap, "Uniswap", "Explore the world decentralized exchange on Uniswap using USDN"), new EcosystemModel(balancer, "Balancer", "Yeild Farm tokens using USDN on Balancer"), new EcosystemModel(pancake, "Pancake", "Explore the world decentralized exchange on Pancake using USDN")];
export function Ecosystem(){
    return <div id="ecosystem-main-container">
    <h3 style={{color: "white"}}>
        Ecosystem
    </h3>
    <div id="ecosystems-card-container">
    {ecosystem.map((item, index)=>
     <div className="ecosystem-card" key={index}>
<img src={item.image} alt={`${item.image}-image`} className="ecosystem-image" />
<h4 className="ecosystem-title">
    {item.title}
</h4>
<p className="ecosystem-details">
    {item.details}
</p>
    </div>)}

    </div>

    </div>
}