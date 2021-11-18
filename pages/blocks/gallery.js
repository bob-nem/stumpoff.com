import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import style from '../../styles/Gallery.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

import firstIMG from '../../images/our-works/1.webp'
import secondIMG from '../../images/our-works/3.webp'
import thirdIMG from '../../images/our-works/4.webp'
import fourthIMG from '../../images/our-works/5.webp'
import fifthIMG from '../../images/our-works/6.webp'
import sixthIMG from '../../images/our-works/7.webp'
import seventhIMG from '../../images/our-works/8.webp'
import eightIMG from '../../images/our-works/9.webp'
import ninegthIMG from '../../images/our-works/10.webp'

export default function Gallery() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    },[slider1, slider2]);

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <div className={style.ArrowLeft}><BsArrowLeftSquareFill /></div>
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <div className={style.ArrowRight}><BsArrowRightSquareFill /></div>
        </button>
    );


    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />
    };

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '5px',
        arrows: false,
        margin: '4px'
    };

    return (
        <div className={style.Container} id="gallery">
            <h2 className={style.Header}>Gallery</h2>
            <p className={style.Description}>here you can see before and after results of our work</p>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >
                <div className={style.MainImg}><Image src={firstIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={secondIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={thirdIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={fourthIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={fifthIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={sixthIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={seventhIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={eightIMG} alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={ninegthIMG} alt="stump off before and after works"/></div>
            </Slider>
            <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>
                    <div><Image src={firstIMG} alt="stump off before and after works"/></div>
                    <div><Image src={secondIMG} alt="stump off before and after works"/></div>
                    <div><Image src={thirdIMG} alt="stump off before and after works"/></div>
                    <div><Image src={fourthIMG} alt="stump off before and after works"/></div>
                    <div><Image src={fifthIMG} alt="stump off before and after works"/></div>
                    <div><Image src={sixthIMG} alt="stump off before and after works"/></div>
                    <div><Image src={seventhIMG} alt="stump off before and after works"/></div>
                    <div><Image src={eightIMG} alt="stump off before and after works"/></div>
                    <div><Image src={ninegthIMG} alt="stump off before and after works"/></div>
                </Slider>
            </div>
        </div>
    )
}