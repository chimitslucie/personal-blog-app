import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import fronted from "../Assets/Icons/logo-frontend-mentor.svg";

function Footer() {
    return (
        <div className="footer">
            <hr />
            <div className="footerContent">
                <p className="footerText text8">
                    Made width &#129505; and &#9749;
                </p>
                <div className="footerMedias">
                    <button className="footerMediasLink">
                        <FontAwesomeIcon icon={faXTwitter} className="icon" />
                    </button>
                    <button className="footerMediasLink">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </button>
                    <button className="footerMediasLink">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                    </button>
                    <button className="footerMediasLink">
                        <img src={fronted} alt="logo fronted mentor" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer