import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <div className="footer-container">
            <p  className="footer-text">Bangladesh</p>
            <hr />

            <div className="footer-link">
                <div>
                    <Link>About</Link>
                    <Link>Advestising</Link>
                    <Link>Business</Link>
                    <Link>How Search work</Link>
                </div>
                <div>
                    <Link>Privacy</Link>
                    <Link>Teams</Link>
                    <Link>Settings</Link>

                </div>
            </div>
        </div>
    )

}

export default Footer;