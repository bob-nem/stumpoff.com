import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import style from '../../styles/Gallery.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

import firstIMG from '../../images/our-works/1.jpg'
import secondIMG from '../../images/our-works/3.jpg'
import thirdIMG from '../../images/our-works/4.jpg'
import fourthIMG from '../../images/our-works/5.jpg'
import fifthIMG from '../../images/our-works/6.jpg'
import sixthIMG from '../../images/our-works/7.jpg'
import seventhIMG from '../../images/our-works/8.jpg'
import eightIMG from '../../images/our-works/9.jpg'
import ninegthIMG from '../../images/our-works/10.jpg'

export default function Gallery() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {

        setNav1(slider1);
        setNav2(slider2);

    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        nextArrow: (
            <div>
                <div className={style.ArrowRight}><BsArrowRightSquareFill /></div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className={style.ArrowLeft}><BsArrowLeftSquareFill /></div>
            </div>
        )
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
        <div className={style.Container}>
            <h2 className={style.Header}>Gallery</h2>
            <p className={style.Description}>here you can see before and after results of our work</p>
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
            >
                <div className={style.MainImg}><Image src={firstIMG} /></div>
                <div className={style.MainImg}><Image src={secondIMG} /></div>
                <div className={style.MainImg}><Image src={thirdIMG} /></div>
                <div className={style.MainImg}><Image src={fourthIMG} /></div>
                <div className={style.MainImg}><Image src={fifthIMG} /></div>
                <div className={style.MainImg}><Image src={sixthIMG} /></div>
                <div className={style.MainImg}><Image src={seventhIMG} /></div>
                <div className={style.MainImg}><Image src={eightIMG} /></div>
                <div className={style.MainImg}><Image src={ninegthIMG} /></div>
            </Slider>
            <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}>
                    <div><Image src={firstIMG} /></div>
                    <div><Image src={secondIMG} /></div>
                    <div><Image src={thirdIMG} /></div>
                    <div><Image src={fourthIMG} /></div>
                    <div><Image src={fifthIMG} /></div>
                    <div><Image src={sixthIMG} /></div>
                    <div><Image src={seventhIMG} /></div>
                    <div><Image src={eightIMG} /></div>
                    <div><Image src={ninegthIMG} /></div>
                </Slider>
            </div>
        </div>
    )
}