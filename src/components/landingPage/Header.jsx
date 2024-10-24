import "../../styles/landingPage/Header.css";
import { useState } from "react";

export function Header(){
    const [showNav, updateShowNav] = useState(false);
   
    return <header>
        <h1>
            <a href="" id="home-link">USDNDAO</a>
        </h1>
        <div id="header-mobile-action-container">
            <button className="header-btn" id="launch-app-header">
                LAUNCH APP
            </button>
            <button className="header-btn" id="menu-btn" onClick={()=> updateShowNav((currentState)=> !currentState)}>
                MENU
            </button>
            
        </div>
        <nav className={showNav ? 'show-nav': 'hide-nav'} id="nav" >
                <ul>
                    <li>
                        <a href="" className="nav-links">DOCS</a>
                    </li> 
                      <li>
                        <a href="" className="nav-links">ECOSYSTEM</a>
                    </li> 
                     <li>
                        <a href="" className="nav-links">ABOUT US</a>
                    </li> 

                     <li>
                        <a href=""className="nav-links">BLOGS</a>
                    </li>
                </ul>
            </nav>
    </header>
}