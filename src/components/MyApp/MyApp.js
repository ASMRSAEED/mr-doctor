import React from 'react';
import './MyApp.css'

const MyApp = () => {
    return (
        <div>
            <div class="bottom-banner">
                <div class="banner-right">
                    <img src="https://i.ibb.co/HtS6T0q/Mobile-App.png" alt="" />
                </div>
                <div class="banner-left">
                    <h1 className='app-text'><b>Simplify Your Experience</b></h1>
                    <p><b>Download Our Mobile App and Get Higher Priority Service</b></p>
                    <button class="primary-button">DOWNLOAD NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyApp;