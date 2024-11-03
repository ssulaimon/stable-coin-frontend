import ethereumLogo from "../../assets/ethereum.svg";
import "../../styles/landingPage/Banner.css";
import {LargeButton} from "../reusable/LargeButton"
import { myRoutes } from "../../utils/routes/routes";
import { useNavigate } from "react-router-dom";
export function Banner(){
    const navigate = useNavigate();
    return <div id="banner">
<img src={ethereumLogo} alt="ethereum-logo" id="banner-image" />
<div>
    <h1 id="banner-large-text">
    USDNDAO Stablecoin with Dynamic, Market-Driven Savings Rates 
    </h1>
    <p id="banner-detail-text">
    BACKED BY WBTC, WETH, AND OTHER ASSETS
    </p>
    <LargeButton title={"LAUNCH APP"} backgroundColor={"white"} onTap={()=> navigate(myRoutes.dashboard)}/>
</div>
    </div>
}