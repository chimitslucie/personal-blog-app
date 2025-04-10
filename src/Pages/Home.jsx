import patternLight from "../Assets/Images/pattern-light.svg";
import Nav from "../Components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import fronted from "../Assets/Icons/logo-frontend-mentor.svg";
import { Link } from "react-router";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div id="home" className="home">
      <img src={patternLight} alt="forme de losange" className="right" />
      <img src={patternLight} alt="forme de losange" className="left" />
      <div className="container">
        <Nav />
        <div className="homeContent">
          <section className="profile">
            <h1 className="profileTitle text2">Hi, I'm Paulina &#128075;</h1>
            <p className="profileText text7">
              I'm on a journey to become a front-end web developer. I love building little projects, trying out new coding techiniques, and sharing what I
              learn along the way. When I'm not at desk, you'll find me reading, hiking throught the mountains, or challenging myself on rock-climbing
              walls.
              <br />
              <br />
              I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who's learning to code. Welcome to my
              corner of the internet, and thanks for stopping by!
            </p>
            <div className="profileMedias">
              <button className="profileMedia">
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
              </button>
              <button className="profileMedia">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </button>
              <button className="profileMedia">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </button>
              <button className="profileMedia">
                <img src={fronted} alt="logo fronted mentor" />
              </button>
            </div>
          </section>
          <hr />
          <section className="articles">
            <h2 className="articlesTitle text2">Latest Articles</h2>
            <div className="articlesContent">
              <Link className="articlesContentLink" to={"/Article"}>
                <h3 className="text5">Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated</h3>
                <p className="textItalic8">February 18, 2025</p>
              </Link>
              <Link className="articlesContentLink" to={"/Article"}>
                <h3 className="text5">Reading for Inspiration: 5 Books That Shaped My Coding Journey</h3>
                <p className="textItalic8">February 15, 2025</p>
              </Link>
              <Link className="articlesContentLink" to={"/Article"}>
                <h3 className="text5">Overcoming Imposter Syndromme as a New Developer</h3>
                <p className="textItalic8">February 10, 2025</p>
              </Link>
              <Link className="articlesContentLink" to={"/Article"}>
                <h3 className="text5">Exploring the World of Responsive Design</h3>
                <p className="textItalic8">February 4, 2025</p>
              </Link>
              <Link className="articlesContentLink" to={"/Article"}>
                <h3 className="text5">My Favorite Dev Tools for Productivity</h3>
                <p className="textItalic8">January 29, 2025</p>
              </Link>
            </div>
            <Link to={"/Blog"} className="articlesLink text6"> View all articles </Link>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;
