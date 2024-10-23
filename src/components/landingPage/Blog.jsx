import { BlogModel } from "../../utils/models/BlogModel";
import whale from "../../assets/whale.svg";
import jupiter from "../../assets/jupiter.svg";
import dog from "../../assets/dog.svg";
import "../../styles/landingPage/Blog.css";
export function Blog(){
    const  blogs = [new BlogModel('“Diamond Handed” Giant Bitcoin Whale Loses Patience, Sells After 5 Years! His Profit Is Astonishing!', whale, "According to Lookonchain's post, the whale that bought Bitcoin five years ago and has been holding it until today has started"),new BlogModel('“Diamond Handed” Giant Bitcoin Whale Loses Patience, Sells After 5 Years! His Profit Is Astonishing!', dog, "According to Lookonchain's post, the whale that bought Bitcoin five years ago and has been holding it until today has started"),new BlogModel('“Diamond Handed” Giant Bitcoin Whale Loses Patience, Sells After 5 Years! His Profit Is Astonishing!', jupiter, "According to Lookonchain's post, the whale that bought Bitcoin five years ago and has been holding it until today has started"),]
    return <div>
        <h3 id="blog-title">
            Blog Posts
        </h3>
        <div id="blogs-main-container">
{blogs.map((item, index)=> <div key={index} className="blog-card">
<img src={item.blogImage} alt="blog-image" className="blog-image"/>
    <p className="blog-headline">
        {item.headline}
    </p>
    <p className="blog-content">
        {item.blogContent}
    </p>
</div>)}
        </div>
    </div>
}