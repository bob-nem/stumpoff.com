import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import style from '../../styles/Gallery.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

import firstIMG from '../../images/our-works/1.webp'
import tenIMG from '../../images/our-works/2.webp'
import secondIMG from '../../images/our-works/3.webp'
import fourthIMG from '../../images/our-works/5.webp'
import seventhIMG from '../../images/our-works/8.webp'
import eightIMG from '../../images/our-works/9.webp'
import ninegthIMG from '../../images/our-works/10.webp'
import elevenIMG from '../../images/our-works/11.webp'
import twenteenIMG from '../../images/our-works/12.webp'
import thurteenIMG from '../../images/our-works/13.webp'
import fourteenIMG from '../../images/our-works/14.webp'
import fifteenIMG from '../../images/our-works/15.webp'
import sixteenIMG from '../../images/our-works/16.webp'
import seventeenIMG from '../../images/our-works/22.webp'
import eightteenIMG from '../../images/our-works/18.webp'
import nineteenIMG from '../../images/our-works/19.webp'
import twentyIMG from '../../images/our-works/20.webp'
import twentyoneIMG from '../../images/our-works/21.webp'

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
        lazyLoad: 'progressive',
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
        margin: '4px',
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
                <div className={style.MainImg}><Image src={firstIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={secondIMG} unoptimized alt="stump off before and after works"/></div>                
                <div className={style.MainImg}><Image src={fourthIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={seventhIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={eightIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={ninegthIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={tenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={elevenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={twenteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={thurteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={fourteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={fifteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={sixteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={seventeenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={eightteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={nineteenIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={twentyIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={twentyoneIMG} unoptimized alt="stump off before and after works"/></div>
            </Slider>
            <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>
                    <div><Image src={firstIMG}  unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={secondIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={fourthIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={seventhIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={eightIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={ninegthIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={tenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={elevenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={twenteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={thurteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={fourteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={fifteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={sixteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={seventeenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={eightteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={nineteenIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={twentyIMG} unoptimized alt="stump off before and after works"/></div>
                    <div><Image src={twentyoneIMG} unoptimized alt="stump off before and after works"/></div>
                </Slider>
            </div>
        </div>
    )
}