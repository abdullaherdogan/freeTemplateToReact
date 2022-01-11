import React from "react";
import { slide1, slide2, slide3 } from "../images";

function Carousel() {
    return (
        <div id="owl-slide" className="owl-carousel">
            <div className="item">
                <img src={slide1} alt="Slide 1" />
            </div>
            <div className="item">
                <img src={slide2} alt="Slide 2" />
            </div>
            <div className="item">
                <img src={slide3} alt="Slide 3" />
            </div>
        </div>
    );
}

export default Carousel;
