import Avatar from "../Assets/Images/image-avatar.jpg";
import { Link } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

function Nav() {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

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
                            <Link to={"/"} className="navLink text8 active">Home</Link>
                        </li>
                        <hr />
                        <li className="navItem">
                            <Link to={"/Blog"} className="navLink text8">Blog</Link>
                        </li>
                        <hr />
                        <li className="navItem">
                            <Link to={"/About"} className="navLink text8">About</Link>
                        </li>
                        <hr />
                        <li className="navItem">
                            <Link to={"/Newsletter"} className="navLink text8">Newsletter</Link>
                        </li>
                    </ul>
                </nav>
                <button className="headerContentBtn">
                    <FontAwesomeIcon icon={faMoon} className="headerContentIcon" />
                </button>
            </div>
        </div>
    )
}

export default Nav