import React from "react";
import Header from "../components/google/Header";
import Avatar from "../components/google/Avatar";
import SearchBox from "../components/google/SearchBox";
import CustomButton from "../components/google/CustomButton";
import './GooglePage.scss'
import GoogleTranslatorLink from "../components/google/GoogleTranslatorLink";
import Footer from "../components/google/Footer";
const GooglePage = () => {
    return (
        <>
            <Header />
            <Avatar />
            <SearchBox />
            <div className="custom-button-flex">
                <CustomButton text='Google Search' />
                <CustomButton text='is feeling lucky' />
            </div>
            <GoogleTranslatorLink />
            <Footer/>
        </>
    )

}

export default GooglePage;