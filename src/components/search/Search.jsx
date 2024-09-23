import React from 'react';
import './Search.css';

import droneRepair from '../../assets/droneRepair.webp';
import electronicsKit from '../../assets/electronicsKit.webp';
import fpvKit from '../../assets/droneRepair3.webp';

function Search() {
    return (
        <div name='services' className='search'>
            <div className="container">
                <div className="left">
                    <h2>Services and Kits for All Your Needs</h2>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={droneRepair} alt="Drone Repair" style={{ width: '300px', height: '250px', marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>Drone Repair</h3>
                                <p>Professional repair services for all types of drones.</p>
                                <p>Price: <strong>₹3050</strong></p>
                            </div>
                        </div>

                        <div className="box">
                            <div>
                                <img src={electronicsKit} alt="Electronics Kit" style={{ width: '300px', height: '250px', marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>Electronics Kits</h3>
                                <p>Complete kits for building electronics projects.</p>
                                <p>Price: <strong>₹1500</strong></p>
                            </div>
                        </div>

                        <div className="box">
                            <div>
                                <img src={fpvKit} alt="FPV Drone Kit" style={{ width: '300px', height: '250px', marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>FPV Drone Kit</h3>
                                <p>Everything you need for FPV drone racing.</p>
                                <p>Price: <strong>₹1200</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
