import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [banner1, banner2, banner3];

    // Automatic slide transition
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <div className="slider-container">
            <div
                className="slides"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: 'transform 1s ease-in-out',
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ backgroundImage: `url(${slide})` }}
                    ></div>
                ))}
            </div>
            <button className="btn-slide btn-prev" onClick={goToPreviousSlide}>❮</button>
            <button className="btn-slide btn-next" onClick={goToNextSlide}>❯</button>
            <div className="banner-overlay"></div>
            <div className="banner-content">
                <h1>Khám Phá Sản Phẩm Mới Nhất!</h1>
                <p>Nhận ưu đãi đặc biệt cho các sản phẩm mới ra mắt.</p>
                <Link to="/Login" className="banner-btn">
                    Mua Ngay
                </Link>
            </div>
        </div>
    );
};

export default Banner;
