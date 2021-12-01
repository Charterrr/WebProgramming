import React from "react";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navigation from "../component/Navigation";

const Home = () => {
    return(
        <>
        <Navigation />
        <Header />
        <Content />
        <Footer />
        </>
    );
}

export default Home;