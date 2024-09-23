import React, { useRef } from 'react';
import './Popular.css';
import product1 from '../../assets/image5.webp';
import product2 from '../../assets/image6.webp';
import product3 from '../../assets/image7.webp';
import product4 from '../../assets/image8.webp';
import product5 from '../../assets/image9.jpeg';

function Popular() {
    const productListRef = useRef(null);

    const scrollLeft = () => {
        productListRef.current.scrollBy({
            left: -300, // Adjust the value as needed
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        productListRef.current.scrollBy({
            left: 300, // Adjust the value as needed
            behavior: 'smooth'
        });
    };

    return (
        <div name='popular-products' className='popular-products'>
            <div className='container'>
                <h1>Popular Products</h1>
                <h2>Find Your Perfect Electronics</h2>

                <div className="slider-container">
                    <button className="arrow left-arrow" onClick={scrollLeft}>‹</button>
                    
                    <div className="product-list" ref={productListRef}>
                        <div className="product-item">
                            <img src={product1} alt="Product 1" />
                            <h3>Smartphone XYZ</h3>
                            <p>Top-notch performance with Smartphone XYZ.</p>
                        </div>
                        <div className="product-item">
                            <img src={product2} alt="Product 2" />
                            <h3>Laptop Pro 15</h3>
                            <p>Powerful performance meets design in Laptop Pro 15.</p>
                        </div>
                        <div className="product-item">
                            <img src={product3} alt="Product 3" />
                            <h3>Smartwatch Series 5</h3>
                            <p>Track fitness and stay connected with Smartwatch Series 5.</p>
                        </div>
                        <div className="product-item">
                            <img src={product4} alt="Product 4" />
                            <h3>Noise Cancelling Headphones</h3>
                            <p>Immerse in high-quality sound with noise-cancelling headphones.</p>
                        </div>
                        <div className="product-item">
                            <img src={product5} alt="Product 5" />
                            <h3>4K Smart TV</h3>
                            <p>Experience movies in ultra-high-definition with 4K Smart TV.</p>
                        </div>
                    </div>
                    
                    <button className="arrow right-arrow" onClick={scrollRight}>›</button>
                </div>
            </div>
        </div>
    );
}

export default Popular;
