import "../../styles/landingPage/NewsLetter.css"
import snow from "../../assets/snow.svg";
export function NewsLetter(){
    return <div id="news-letter-main-container">
 <div>
 <h2 id="news-letter-title">
        Get Started
    </h2>
    <p id="news-letter-details">
    Please keep me updated by email with the latest
crypto news,research findings, reward programs, 
event updates, coin listings and more
information from UssdDao.
    </p>
    <input type="email" id="email-sub-input" placeholder="Enter email address"/>
    <button id="sub-btn">
        Subscribe
    </button>
 </div>
 <img src={snow} alt="snow-image" id="snow-image"/>
    </div>
}