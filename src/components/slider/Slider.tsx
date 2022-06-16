import React, { useState } from 'react';
import './slider.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import movie_pic_1 from '../../assets/img/movie-pic1.png';
import movie_pic_2 from '../../assets/img/movie-pic2.jpg';
import movie_pic_3 from '../../assets/img/movie-pic3.jpg';


const SliderComponent = () => {

    const slides = [
        {
            pic: movie_pic_1,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt aut fuga odio iste unde."
        },
        {
            pic: movie_pic_2,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        },
        {
            pic: movie_pic_3,
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore lalala"
        },
    ]

    const slidesProps = {
        infiniteLoop: true,
        autoPlay: true,
        interval: 2000,
        showStatus: false,
        showThumbs: false,
        emulateTouch: true,
        showArrows: false,
    }

    return (
        <div className="sliderComponent-container">
            <Carousel {...slidesProps} className='slider-container'>
                {slides.map((slide: any, index: number) => {
                    return (
                        <div className='slide-box' key={index}>
                            <img className='slide-img' src={slide.pic} alt='slide' />
                            <div className='text-container'>
                                <p className='slide-text'>{slide.text}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default SliderComponent