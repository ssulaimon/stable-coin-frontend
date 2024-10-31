import "../../styles/appPage/TopBar.css";
import { MdMenu } from "react-icons/md";


export function TopBar(){
    function menuClicked(){
        const menu =   document.getElementById("side-pannel");
        if(menu.style.visibility === "hidden"){
           menu.style.visibility = 'visible';
         menu.style.opacity = "1";
         menu.style.maxHeight = "300px";
        }else{
           menu.style.visibility = 'hidden';
         menu.style.opacity = "0";
         menu.style.maxHeight = "0px";
        }
    }
    return <div id="top-bar-main-container">
    <a href="" id="website-link">
        USDNDAO
    </a>
        <MdMenu color="#010B13" size={40} id="open-menu-btn" onClick={menuClicked}/>
        <button id="connect-wallet-btn" >
connect
        </button>
    </div>
}

