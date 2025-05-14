import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container ">
            <Slider {...settings}>
                <div >
                    <img src="https://lh3.googleusercontent.com/XJjdAi_t9j3mTD-kXJnTrdieSbiX46KVMUgMRIL7-ZoZ6tLupHQGfANzWE1tGoyYZyWd1Irx-6BJkrkJ=s265-w265-h265" alt="" className=" ml-5 mt-2 h-29 w-22 md:w-full md:h-50 md:" />
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/qi23egb3N2QlpGcuOXmKZlctw8w_ixc_NuDSZGngHPoSpjEPbB79NGwC3gHAkBH4wtk-na8Q1WKve6Wz=s265-w265-h265" alt="" className="ml-4 mt-2 h-29  md:w-full md:h-50 md:" />
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/gJj3Ty0-4zkYVHIZ6YWy5ofCB1CE13E8TnTNS4_aXWVHpKahu8V-CfQH_L7cZYPsaQCGUr9Z9vG2WWmn=s265-w265-h265" alt="" className="ml-6 mt-2 h-29  md:w-full md:h-50 md:" />
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/Jwfon4xHxCF2CokTBFE9udAF_UfcAcW17iIrMLnPiSCQQk5jxK8WrZypEh6ajcHoo_4Lcx2bxmkpoSvqKg=s265-w265-h265" alt="" className="ml-8 mt-2 h-29  md:w-full md:h-50 md:" />
                </div>
               
                <div>
                    <img src="https://lh3.googleusercontent.com/d6IJc_hBnpulujyE10UMvNXUPi364vjD_o66wLDOY2psQwOYHRVeGTXbK-Wjt6bjBrT5Q2v6NrG9UdsR=s265-w265-h265" alt="" className="ml-10 mt-2 h-29 w-19  md:w-full md:h-50 md: mr-1" />
                </div>
            </Slider>
        </div>
    );
}

export default AutoPlay;