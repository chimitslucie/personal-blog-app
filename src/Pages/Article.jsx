import patternLight from "../Assets/Images/pattern-light.svg";
import Nav from "../Components/Nav";
import data from "../Data/data.json";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Footer from "../Components/Footer";

function Article() {

    const { slug } = useParams();
    const item = data.find((el) => el.slug === slug);

    if (!item) return <p>Contenu introuvable</p>;

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-Us", { month: "long", day: "numeric", year: "numeric" });
    };

    return (
        <div id="article" className="article">
            <img src={patternLight} alt="forme de losange" className="right" />
            <img src={patternLight} alt="forme de losange" className="left" />
            <div className="container">
                <Nav />
                <div className="articleContent">
                    <h1 className="text1">{item.title}</h1>
                    <p className="textItalic8">Published {formatDate(item.publishedAt)}</p>
                    <ReactMarkdown>{item.content}</ReactMarkdown>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Article