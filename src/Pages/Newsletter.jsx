import patternLight from "../Assets/Images/pattern-light.svg";
import Nav from "../Components/Nav";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import error from '../Assets/Icons/icon-error.svg';
import Footer from "../Components/Footer";

function Newsletter() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [formMessage, setFormMessage] = useState("");

    const onSubmit = () => {
        setFormMessage("You're subscribed! Check your inbox for updates.");
        document.querySelector("input").style.border = "1px solid #008531";
    };

    const onError = () => {
        setFormMessage();
        document.querySelector("input").style.border = "1px solid #D92D20";
    };

    return (
        <div id="newsletter" className="newsletter">
            <img src={patternLight} alt="forme de losange" className="right" />
            <img src={patternLight} alt="forme de losange" className="left" />
            <div className="container">
                <Nav />
                <div className="newsletterContent">
                    <h1 className="title text2">Newsletter</h1>
                    <p className="text text7">
                        Want to stay updated on my latest article, coding tutorials, and personal adventures? Sign up for my newsletter! It's a simple way
                        to keep track of new posts and occasional coding tips I discover. Just drop your email in the sign-up box, and I'll send you
                        updates whenever there's something new to share.
                    </p>
                    <h2 className="subtitle text5">
                        I'd love to have you along for the ride and also hear about your own journey!
                    </h2>
                    <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="formGroup">
                            <label htmlFor="email" className="text7">Email Address</label>
                            <input className="text7" type="email" {...register("email", {
                                required: "L'email est requis.",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Format d'email invalide.",
                                },
                            })}
                                name="email" id="email" placeholder="email@example.com" />
                        </div>
                        {errors.email && <p className="error text8"><img src={error} alt="icon erreur un point d'exclamation dans un cercle" />
                            Please enter a valid email address.</p>}
                        {formMessage && (
                            <p className="validate text8">
                                <FontAwesomeIcon icon={faCircleCheck} className="icon" />
                                {formMessage}
                            </p>
                        )}
                        <input className="text6 button" type="submit" value="Stay uptaded" />
                        <p className="text text8">Unsubscribe anytime. No spam, I promise &#128578;</p>
                    </form>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Newsletter