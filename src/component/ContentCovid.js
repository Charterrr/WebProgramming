import React from "react";

const ContentCovid = (props) => {
    return(
        <div className="card mb-4 bg-info">
            <div className="card-header"><h5>Lates Total Report ( Covid-19 )</h5></div>
            <div className="card-body">
                <h5>Country : {props.conten.country}</h5>
                <h6>Confirmed : {props.conten.confirmed}</h6>
                <h6>Recovered : {props.conten.recovered}</h6>
                <h6 className="text-danger">Deaths : {props.conten.deaths}</h6>
                <h6 className="text-success">Last Change : {props.conten.lastChange}</h6>
                <h6 className="text-success">Last Update : {props.conten.lastUpdate}</h6>
            </div>
        </div>
    );
}

export default ContentCovid;