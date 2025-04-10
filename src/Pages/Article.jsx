import patternLight from "../Assets/Images/pattern-light.svg";
import Nav from "../Components/Nav";
import datas from "../Data/data.json";
import Footer from "../Components/Footer";

function Article() {
    return (
        <div id="article" className="article">
            <img src={patternLight} alt="forme de losange" className="right" />
            <img src={patternLight} alt="forme de losange" className="left" />
            <div className="container">
                <Nav />
                <div className="articleContent">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Article