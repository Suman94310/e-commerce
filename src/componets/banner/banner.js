import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./banner.css"
import one from "./assets/1.jpg"
import two from "./assets/2.jpg"
import three from "./assets/3.jpg"

function Banner() {
    return (
        <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} showIndicators={false} className="banner">
            <div className="banner_slide">
                <img src={one} alt="image1" className="banner_image"/>
                <p className="legend">Legend 1</p>
            </div>
            <div className="banner_slide">
                <img src={two} alt="image2" className="banner_image"/>
                <p className="legend">Legend 2</p>
            </div>
            <div className="banner_slide">
                <img src={three} alt="image3" className="banner_image"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

        
    );
};

export default Banner