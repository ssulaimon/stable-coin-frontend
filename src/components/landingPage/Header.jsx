import "../../styles/landingPage/Header.css";
export function Header(){
    return <header>
        <h1>
            <a href="" id="home-link">USDNDAO</a>
        </h1>
        <div id="header-mobile-action-container">
            <button className="header-btn" id="launch-app-header">
                LAUNCH APP
            </button>
            <button className="header-btn" id="menu-btn">
                MENU
            </button>
            
        </div>
        <nav>
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