import React from "react";
import './CustomButton.scss'

const CustomButton = ({text}) => {
    return (
        <div className="google-custom-button">
            <button>{text}</button>
        </div>
    )
}

export default CustomButton;