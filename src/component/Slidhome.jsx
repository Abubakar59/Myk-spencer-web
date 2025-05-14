import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className="justify-items-center">
                <img src="https://thumbs.dreamstime.com/b/happy-young-adult-woman-smiling-teeth-smile-outdoors-walking-city-street-sunset-time-wearing-winter-clothes-kni-81952133.jpg?w=768" alt="" className="w-full" />
            </div>
            <div>
                <img src="https://thumbs.dreamstime.com/b/upset-man-w-laundry-basket-huge-pile-clothes-distraught-his-hand-to-his-head-his-hand-standing-front-43789117.jpg?w=768" alt="" className="w-full" />
            </div>
            
            
           
        </Slider>
    );
}