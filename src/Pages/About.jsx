import patternLight from "../Assets/Images/pattern-light.svg";
import Nav from "../Components/Nav";
import workspace from "../Assets/Images/workspace.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import fronted from "../Assets/Icons/logo-frontend-mentor.svg";
import Footer from "../Components/Footer";

function About() {
    return (
        <div id="about" className="about">
            <img src={patternLight} alt="forme de losange" className="right" />
            <img src={patternLight} alt="forme de losange" className="left" />
            <div className="container">
                <Nav />
                <div className="aboutContent">
                    <h1 className="title text2">About Me</h1>
                    <p className="text text7">
                        Hi, I'm Paulina! Ever since I can remember, I've had a passion for creativity and problem-solving. That's what led me to the world
                        of front-end web development. There's something magical about seeing an idea come to life in the browser-whether it's a simple
                        layout experiment or a complex interface for a bigger project.
                        <br />
                        <br />
                        When I'm not coding, I love getting lost in a good book. My taste is pretty eclectic: I'll happily read everything from fantasy
                        novels to biographies of tech pioneers. Reading helps me unwinds and often sparks new ideas for my coding projects.
                        <br />
                        <br />
                        Another big passion of mine is the great outdoors. Hiking allows me to disconnect from the digital world and reconnect with nature.
                        I love challenging hikes with rewarding views at the top. And if I'm not on the trails, you might catch me rock climbing. The
                        combination of mental focus and physical endurance is a perfect parallel to tackling tough coding challenges!
                        <br />
                        <br />
                        Some of my favorite books:
                    </p>
                    <ul className="list">
                        <li className="item text7">
                            <span className="textSemibold7">"The Pragmatic Programmer"</span> by Andrex Hunt and David Thomas (for helpful insights into software development)
                        </li>
                        <li className="item text7">
                            <span className="textSemibold7">"Ready Player One"</span> by Ernest Cline (for some futuristic escapism)
                        </li>
                        <li className="item text7">
                            <span className="textSemibold7">"The Hobbit"</span> by J.R.R Tolkien (for a bit of fantasy fun)
                        </li>
                        <li className="item text7">
                            <span className="textSemibold7">"Educated"</span> by Tara Westover (for incredible inspiration)
                        </li>
                    </ul>
                    <p className="text text7">
                        I absolutely love my workspace as a place that inspires me to do my best work, so I thought I'd share it with you:
                    </p>
                    <img src={workspace} alt="espace de travaille" className="workspaceImg" />
                    <p className="text text7">
                        I hope this blog not only documents my growth but also helps others see that coding can be for everyone. Thanks for joining me on
                        this journey!
                    </p>
                    <h3 className="mediasTitle text4">Follow me</h3>
                    <div className="medias">
                        <button className="media">
                            <FontAwesomeIcon icon={faXTwitter} className="icon" />
                        </button>
                        <button className="media">
                            <FontAwesomeIcon icon={faGithub} className="icon" />
                        </button>
                        <button className="media">
                            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                        </button>
                        <button className="media">
                            <img src={fronted} alt="logo fronted mentor" />
                        </button>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About