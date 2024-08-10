import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./banner.scss";

export default class Banner extends Component {
    render() {
        const banners = [
            {
                bgColor: "#f0e0ff",
                heading: "Winner offer 2024 collections",
                imgSrc: "https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png",
                textColor: "black",
                buttonBgColor: "transparent",
                buttonText: "Shop Now",
                buttonBorderColor: "black",
                hoverBgColor: "black",
                hoverTextColor: "white",
            },
            {
                bgColor: "white",
                heading: "Winner offer 2024 collections",
                imgSrc: "/images/ban4.png",
                textColor: "black",
                buttonBgColor: "transparent",
                buttonText: "Shop Now",
                buttonBorderColor: "black",
                hoverBgColor: "black",
                hoverTextColor: "white",
            },
            {
                bgColor: "#e8e8e8",
                heading: "Male Clothes",
                imgSrc: "/images/ban2.png",
                textColor: "black",
                buttonBgColor: "transparent",
                buttonText: "Shop Now",
                buttonBorderColor: "black",
                hoverBgColor: "black",
                hoverTextColor: "white",
            },
            {
                bgColor: "black",
                heading: "Male Clothes",
                imgSrc: "https://flone.jamstacktemplates.dev/assets/img/slider/slider-3.jpg",
                textColor: "white",
                buttonBgColor: "transparent",
                buttonText: "Shop Now",
                buttonBorderColor: "white",
                hoverBgColor: "white",
                hoverTextColor: "gray",
            },
            {
                bgColor: "black",
                heading: "Male Clothes",
                imgSrc: "/images/bn3.png",
                textColor: "white",
                buttonBgColor: "transparent",
                buttonText: "Shop Now",
                buttonBorderColor: "white",
                hoverBgColor: "white",
                hoverTextColor: "gray",
            },
        ];

        return (
            <Slide>
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className={`banner_container bg-[${banner.bgColor}] h-[calc(100vh-30px)] flex justify-center items-center`}
                        style={{ backgroundColor: banner.bgColor }}
                    >
                        <div className="banner_contents w-[50%] h-[100%] flex justify-center items-center flex-col">
                            <h1 className={`text-[60px] capitalize text-[${banner.textColor}]`} style={{ color: banner.textColor }}>
                                {banner.heading}
                            </h1>
                            <a
                                href="#product"
                                className={`bannerbtn  text-lg bg-[${banner.buttonBgColor}] text-[${banner.textColor}] py-2 px-4 rounded-lg border-2 border-[${banner.buttonBorderColor}] m-[10px] hover:bg-[${banner.hoverBgColor}] hover:text-[${banner.hoverTextColor}] transition-all duration-300`}
                                style={{
                                    backgroundColor: banner.buttonBgColor,
                                    color: banner.textColor,
                                    borderColor: banner.buttonBorderColor,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {banner.buttonText}
                            </a>
                        </div>
                        <img src={banner.imgSrc} alt="" className='banner_img h-[500px] w-[500px] object-cover' />
                    </div>
                ))}
            </Slide>
        );
    }
}
