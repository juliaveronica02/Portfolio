import React from 'react'
import "./style.css"
import HeaderImage from "../../images/images1.png"

export default function header() {
    return (
        <div className="header-wave">
        {/* HEADER */}
        <div className="container-home">
        <div className="row">
            <div className="col-2">
                <h1>Give Your Workout <br/> A New Style</h1>
                <p className="phome">Success is not always about greatness. It's about consintency <br/> of hard work gains success. Greatness will come.</p>
                {/* open www.toptal.com to create arrow. */}
                <a href="" className="btn">Explore Now &#8594;.</a>
            </div>
            <div className="col-2">
                <img src={HeaderImage} alt="header-image"/>
            </div>
        </div>
        </div>
        </div>

    )
}
