import { Header } from "../components/landingPage/Header"
import { Banner } from "../components/landingPage/Banner"
import { Divider } from "../components/reusable/Divider"
import { LiquidityAccess } from "../components/landingPage/LiquidityAccess"
import { HowItWorks } from "../components/landingPage/HowItWorks"
import { Discovery } from "../components/landingPage/Discovery"
import { Ecosystem } from "../components/landingPage/Ecosystem"
import { Faq } from "../components/landingPage/Faq"
import { Blog } from "../components/landingPage/Blog"
import { NewsLetter } from "../components/landingPage/NewsLetter"
import { Footer } from "../components/landingPage/Footer"
export function LandingPage(){
    return <div>
    
    <Header/>
   
   <div className="container-one">
   <Banner/>
   </div>
 
    <Divider/>
    <div className="container-one">
    <LiquidityAccess/>
    </div>
   
    <Divider/>
    <div className="container-one">
    <HowItWorks/>
    </div>
   
    <Divider/>
    <div className="container-one">
    <Discovery/>
    </div>
   
    <Divider/>
    <div className="container-one">
    <Ecosystem/>
<Faq/> 
<Blog/>   
<NewsLetter/>
<Footer/>
    </div>
 
    </div>
}