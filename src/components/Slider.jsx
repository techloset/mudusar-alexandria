import React, { Component } from "react";
import Slider from "react-slick";
import '../index.css';
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from '../assests/sliderImg1.png'
import sliderImg2 from '../assests/sliderImg2.png'
import sliderImg3 from '../assests/sliderImg3.png'
import previousIcon from '../assests/prev.png'
import nextIcon from '../assests/next.png'
// import sliderImg4 from '../assests/logo.png'
import bgImg from '../assests/bgImg.png'
import buttonImg1 from '../assests/Button2.png'

export default () => {
    const slider = React.useRef(null);

    const settings = {
        prevArrow: null,
        nextArrow: null,
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }],

    }
    return (
        <div id='blog' className="mt-20"  >

            <div className="flex gap-16  justify-between max-md:justify-center text-center flex-wrap items-center">
                <h1 className="ml-20 max-lg:ml-0 text-4xl font-medium mb-10 font-serif">FEATURED <span className="text-[#7D75D8]">WORKS</span></h1>
                <div className="flex gap-4  mr-20 max-md:mr-0 mb-8 max-sm:mt-[-10%]">

                    <button className="text-right" onClick={() => slider?.current?.slickPrev()}> <img src={previousIcon} alt="slider wali img" /></button>
                    <button onClick={() => slider?.current?.slickNext()}><img src={nextIcon} alt="slider wali img" /></button>
                </div>
            </div>
            <div className="flex  justify-center " >


                <div className="w-11/12 ">
                    <Slider ref={slider} {...settings}>
                        <div className="mr-4">
                            <h3 className="pr-10"><img src={sliderImg3} alt="slider wali img" /></h3>

                        </div>
                        <div>
                            <h3 className="mr-10"><img src={sliderImg2} alt="slider wali img" /></h3>

                        </div>
                        <div>
                            <h3 className="mr-10"><img src={sliderImg3} alt="slider wali img" /></h3>

                        </div>
                        <div>
                            <h3 className="mr-10"><img src={sliderImg2} alt="slider wali img" /></h3>

                        </div>
                        <div>
                            <h3 className="mr-10"><img src={sliderImg3} alt="slider wali img" /></h3>

                        </div>

                    </Slider>

                </div>
            </div>
            <div>
                <h1 className="text-center font-serif text-3xl">Want to add your work?</h1>
            </div>
            <div className="flex justify-center mt-10">
                <button className=' bg-gradient-to-r  from-[#6B60EB] to-[#CE5FE5] text-white flex gap-2 justify-center px-16 py-4    text-xl font-bold rounded-xl '> <h1 className="font-sans">CONTACT US</h1></button>

                {/* <button  ><img src={buttonImg1} alt="" /></button> */}
            </div>

        </div>
    );

}