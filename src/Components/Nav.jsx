import Avatar from "../Assets/Images/image-avatar.jpg";
import { Link } from "react-router";
import { useState, useContext } from "react";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../Context/ThemeContext";

function Nav() {
    const [showNav, setShowNav] = useState(false);
    let location = useLocation();

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="header">
            <Link to={"/"}>
                <img src={Avatar} alt="avatar d'une personne" />
            </Link>
            <div className="headerContent">
                <div id="navToggle" className={`navToggle ${showNav ? "toCross" : ""}`} onClick={handleShowNav}>
                    <span className="navToggleBar navToggleBarTop"></span>
                    <span className="navToggleBar navToggleBarMiddle"></span>
                    <span className="navToggleBar navToggleBarBottom"></span>
                </div>
                <nav className={`nav ${showNav ? "navOpen" : ""}`}>
                    <ul className="navList">
                        <li className="navItem">
                            <Link to={"/"} className={`navLink text8 ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
                        </li>
                        <hr />
                        <li className="navItem">
                            <Link to={"/Blog"} className={`navLink text8 ${location.pathname === "/Blog" ? "active" : ""}`}>Blog</Link>
                        </li>
                        <hr />
                        <li className="navItem">
                            <Link to={"/About"} className={`navLink text8 ${location.pathname === "/About" ? "active" : ""}`}>About</Link>
                        </li>
                        <hr />
                        <li className="navItem">
                            <Link to={"/Newsletter"} className={`navLink text8 ${location.pathname === "/Newsletter" ? "active" : ""}`}>Newsletter</Link>
                        </li>
                    </ul>
                </nav>
                <button className="headerContentBtn" onClick={toggleTheme}>
                    {theme === "light" ? <FontAwesomeIcon icon={faMoon} className="headerContentIcon" /> : <FontAwesomeIcon icon={faSun} className="headerContentIcon" />}

                </button>
            </div>
        </div>
    )
}

export default Nav