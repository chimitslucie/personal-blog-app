import patternLight from "../Assets/Images/pattern-light.svg";
import Nav from "../Components/Nav";
import { Link } from "react-router";
import data from "../Data/data.json";
import Footer from "../Components/Footer";

function Blog() {
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-Us", { month: "long", day: "numeric", year: "numeric" });
    };

    return (
        <div id="blog" className="blog">
            <img src={patternLight} alt="forme de losange" className="right" />
            <img src={patternLight} alt="forme de losange" className="left" />
            <div className="container">
                <Nav />
                <div className="blogContent">
                    <section className="blogContentHeader">
                        <h1 className="title text2">My Articles</h1>
                        <p className="text text7">Below are all my recent blog posts. Click on any title to read the full article.</p>
                    </section>
                    <hr />
                    <section className="blogLinks">
                        {data.map((item) => (
                            <div key={item.id}>
                                <Link className="blogLink" to={`/Article/${item.slug}`}>
                                    <h3 className="blogLinkTitle text5">{item.title}</h3>
                                    <p className="blogLinkDate textItalic8">{formatDate(item.publishedAt)}</p>
                                    <p className="blogLinkText text7">{item.description}</p>
                                </Link>
                                <hr />
                            </div>
                        ))}
                    </section>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Blog