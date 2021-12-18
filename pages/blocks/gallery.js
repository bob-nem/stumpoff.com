import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import style from '../../styles/Gallery.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

import firstIMG from '../../images/carousel/1.webp'
import secondIMG from '../../images/carousel/2.webp'
import thirdIMG from '../../images/carousel/3.webp'
import fifthIMG from '../../images/carousel/5.webp'
import seventhIMG from '../../images/carousel/7.webp'
import eightIMG from '../../images/carousel/8.webp'
import ninegthIMG from '../../images/carousel/9.webp'
import tenIMG from '../../images/carousel/10.webp'
import elevenIMG from '../../images/carousel/11.webp'
import twenteenIMG from '../../images/carousel/12.webp'
import thurteenIMG from '../../images/carousel/13.webp'
import fourteenIMG from '../../images/carousel/14.webp'
import fifteenIMG from '../../images/carousel/15.webp'
import sixteenIMG from '../../images/carousel/16.webp'

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
        margin: '4px'
    };

    return (
        <div className={style.Container} id="gallery">
            <h2 className={style.Header}>Portfolio</h2>
            <p className={style.Description}>Stump Grinding Near me before and after</p>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >
                <div className={style.MainImg}><Image src={firstIMG} unoptimized alt="stump off before and after works"/></div>
                <div className={style.MainImg}><Image src={secondIMG} unoptimized alt="Stump Grinding in Holyoke"/></div>
                <div className={style.MainImg}><Image src={seventhIMG} unoptimized alt="Stump removal in CT"/></div>
                <div className={style.MainImg}><Image src={eightIMG} unoptimized alt="Stump Grinding in West Springfield"/></div>
                <div className={style.MainImg}><Image src={ninegthIMG} unoptimized alt="Stump removal in West Springfield"/></div>
                <div className={style.MainImg}><Image src={tenIMG} unoptimized alt="Stump removal in West Agawam"/></div>
                <div className={style.MainImg}><Image src={elevenIMG} unoptimized alt="Stump removal in Longmeadow"/></div>
                <div className={style.MainImg}><Image src={twenteenIMG} unoptimized alt="Stump grinding near me"/></div>
                <div className={style.MainImg}><Image src={thurteenIMG} unoptimized alt="Stump grinding in Suffield"/></div>
                <div className={style.MainImg}><Image src={fourteenIMG} unoptimized alt="Tree stump grinding in my property"/></div>
                <div className={style.MainImg}><Image src={fifteenIMG} unoptimized alt="Stump grinding in Enfield"/></div>
                <div className={style.MainImg}><Image src={sixteenIMG} unoptimized alt="Stump grinding in Windsor Locks"/></div>
                <div className={style.MainImg}><Image src={thirdIMG} unoptimized alt="Stump removal in Windsor"/></div>
                <div className={style.MainImg}><Image src={fifthIMG} unoptimized alt="Stump removal in East Windsor"/></div>
            </Slider>
            <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>
                    <div className={style.Thumb}><Image src={firstIMG}  unoptimized alt="stump off before and after works"/></div>
                    <div className={style.Thumb}><Image src={secondIMG} unoptimized alt="Stump Grinding in Holyoke"/></div>
                    <div className={style.Thumb}><Image src={seventhIMG} unoptimized alt="Stump removal in CT"/></div>
                    <div className={style.Thumb}><Image src={eightIMG} unoptimized alt="Stump Grinding in West Springfield"/></div>
                    <div className={style.Thumb}><Image src={ninegthIMG} unoptimized alt="Stump removal in West Springfield"/></div>
                    <div className={style.Thumb}><Image src={tenIMG} unoptimized alt="Stump removal in West Agawam"/></div>
                    <div className={style.Thumb}><Image src={elevenIMG} unoptimized alt="Stump removal in Longmeadow"/></div>
                    <div className={style.Thumb}><Image src={twenteenIMG} unoptimized alt="Stump grinding near me"/></div>
                    <div className={style.Thumb}><Image src={thurteenIMG} unoptimized alt="Stump grinding in Suffield"/></div>
                    <div className={style.Thumb}><Image src={fourteenIMG} unoptimized alt="Tree stump grinding in my property"/></div>
                    <div className={style.Thumb}><Image src={fifteenIMG} unoptimized alt="Stump grinding in Enfield"/></div>
                    <div className={style.Thumb}><Image src={sixteenIMG} unoptimized alt="Stump grinding in Windsor Locks"/></div>
                    <div className={style.Thumb}><Image src={thirdIMG} unoptimized alt="Stump removal in Windsor"/></div>
                    <div className={style.Thumb}><Image src={fifthIMG} unoptimized alt="Stump removal in East Windsor"/></div>
                </Slider>
            </div>
        </div>
    )
}