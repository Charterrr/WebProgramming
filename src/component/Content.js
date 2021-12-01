import React, { useState, useEffect } from "react";
import ContentCovid from "./ContentCovid";

const Content = () => {
    const [content, setContent] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        
        // Hit-Endpoint
        fetch('https://covid19-api.com/country?name=indonesia&format=json')
        .then(response => response.json())
        .then(data => setContent(data));
        // Coment
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // hit endpoint search country
        fetch(`https://covid19-api.com/country?name=${text}&format=json`)
        .then(response => response.json())
        .then(data => setContent(data));

        setText('');
    }
    const handleChange = (e) => {setText(e.target.value)}
    return(
        <div className="container">
            <div className="row">
                
                <div className="col-lg-8">

                    <div className="card mb-4">
                    <a href="https://cdn.pixabay.com/photo/2020/03/23/10/26/covid-19-4960254_960_720.png"><img className="card-img-top" src="https://cdn.pixabay.com/photo/2020/03/23/10/26/covid-19-4960254_960_720.png" height="300" alt="..." /></a>
                        <div className="card-body">
                            <div className="small text-muted">Update Covid19 2021</div>
                            <h2 className="card-title">Covid 19</h2>
                            <p className="card-text">Adalah penyakit akibat infeksi virus severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). COVID-19 dapat menyebabkan gangguan sistem pernapasan, mulai dari gejala yang ringan seperti flu, hingga infeksi paru-paru, seperti pneumonia.</p>
                            <a className="btn btn-primary" href="https://www.alodokter.com/covid-19">Read more →</a>
                        </div>
                    </div>


                </div>

                <div className="col-lg-4">

                    <form className="my-2" onSubmit={handleSubmit}>
                        <input className="form-control" onChange={handleChange} value={text} type="text" placeholder="Enter Country Name..." />
                    </form>

                    
                    { content.map((conten) => <ContentCovid key={conten.id} conten={conten} />) }
                </div>
            </div>
        </div>
    );
}

export default Content;