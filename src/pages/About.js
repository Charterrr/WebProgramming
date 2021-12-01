import React from "react";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";

const About = () => {
    return(
        <>
        <Navigation />

        <div className="container my-5">
            <h1> About Me </h1>
            <p>Nama : Jordan Charter Momongan <br />
            NIM : 105011910085 <br />
            Program Studi : Sistem Informasi</p>
        </div>

        <Footer />        
        </>
    );
}

export default About;