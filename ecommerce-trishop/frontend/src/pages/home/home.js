import React from 'react'
import "./style.css"
import HeaderImage from "../../images/images1.png"
// import Category from "./categories"
import Shoes from "../../images/categories1.png"

export default function header() {
    return (
        <>
        {/* Header. */}
        <div className="header-wave"> 
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
        {/* CATEGORIES */}
        <div className="categories">
            <h2 className>CATEGORY.</h2>
            <hr className="hr" />
        <div className="small-container">
             <div className="row">
            <div class="col-3">
                <img src={Shoes} alt="categories" />
            </div>
            <div class="col-3">
                <img src={Shoes} alt="categories" />
            </div>
            <div class="col-3">
                <img src={Shoes} alt="categories" />
            </div>
        </div>
        </div>
    </div>
    {/* FEATURED PRODUCTS. */}
    <div className="small-container">
        <h2>Featured Products.</h2>
        <div className="row">
            <div className="col-4">
                <img src={Shoes} />
                <h4>Pink Shoes</h4>
                <p>$50.00</p>
            </div>
        </div>
    </div>
    </>
    )
}
