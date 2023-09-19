import React, { useState } from "react";
import './GoogleTranslatorLink.scss'
import { Link } from "react-router-dom";

const GoogleTranslatorLink = () => {
    const [text, setText] = useState("English")
    const hendleOnClick = () => {
        if (text == "English") {
            setText("Bangla")
        }
        else if (text == "Bangla") {
            setText("English")
        }
    }
    return (
        <div className="google-text">
            <div><p>Google offered in</p></div>
            <div className="google-link"><Link className="google-text-link" onClick={hendleOnClick} >{text}</Link></div>

        </div>
    )
}

export default GoogleTranslatorLink;