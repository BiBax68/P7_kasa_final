import React from 'react';
import { useState } from "react";
import leftArrow from '@/Assets/Img/Components/Gallery/GalleryArrowLeft.png';
import rightArrow from '@/Assets/Img/Components/Gallery/GalleryArrowRight.png';

import '@/components/Gallery/Gallery.css'

function Gallery({ photo }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? photo.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === photo.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <section className='gallery-area'>
            <div className='gallery-content'>

                {photo.map((photo, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentSlide ? "active" : ""
                            }`}
                    >
                        <img src={photo} alt="carrousel" />
                    </div>
                ))}

                <img className='arrow left' src={leftArrow} alt="previous" onClick={prevSlide} style={photo.length > 1 ? { display: 'block' } : { display: 'none' }} ></img>
                <img className='arrow right' src={rightArrow} alt="next" onClick={nextSlide} style={photo.length > 1 ? { display: 'block' } : { display: 'none' }}></img>
                <div className="counter" style={photo.length > 1 ? { display: 'block' } : { display: 'none' }}>
                    {currentSlide + 1} / {photo.length}
                </div>
            </div>
        </section >
    );
};

export default Gallery;
