import { Header } from "../components/landingPage/Header"
import { Banner } from "../components/landingPage/Banner"
import { Divider } from "../components/reusable/Divider"
import { LiquidityAccess } from "../components/landingPage/LiquidityAccess"
import { HowItWorks } from "../components/landingPage/HowItWorks"
import { Discovery } from "../components/landingPage/Discovery"
import { Ecosystem } from "../components/landingPage/Ecosystem"
export function LandingPage(){
    return <div>
    <Header/>
    <Banner/>
    <Divider/>
    <LiquidityAccess/>
    <Divider/>
    <HowItWorks/>
    <Divider/>
    <Discovery/>
    <Divider/>
    <Ecosystem/>
    </div>
}