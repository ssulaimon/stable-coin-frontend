import { TopBar } from "../components/appPage/TopBar"
import "../styles/appPage/AppPage.css";
import { SidePannel } from "../components/appPage/SidePannel";
import { Outlet } from "react-router-dom";



export function AppPage(){
    
    return <div>
        <TopBar/>
        <div id="app-main-container">
          <SidePannel/>
            <div id="body-content" >
            <Outlet>
                
            </Outlet>
            
            </div>
        </div>
   
    </div>
}