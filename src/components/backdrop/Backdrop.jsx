import React, { useState, useEffect } from 'react';
import './Backdrop.css';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Sample images
import Image1 from '../../assets/image1.webp';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';

function Backdrop() {
    const images = [
        { src: Image1, text: "Innovation in Agriculture" },
        { src: Image2, text: "Choose your popular products" },
        { src: Image3, text: "Use innovation in different areas" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="backdrop">
            <div className="carousel">
                <div className="carousel-image">
                    <img src={images[currentIndex].src} alt="Travel Destination" />
                    <div className="overlay">
                        <h2>{images[currentIndex].text}</h2>
                    </div>
                </div>

                {/* Left and Right arrows */}
                <AiOutlineLeft className="arrow left-arrow" onClick={prevSlide} />
                <AiOutlineRight className="arrow right-arrow" onClick={nextSlide} />
            </div>
        </div>
    );
}

export default Backdrop;
