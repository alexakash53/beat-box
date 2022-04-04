import React from 'react';
import banner from '../../images/earbuds.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area container'>
            <div className="text-banner">
                <h2>beat box awesome <br /><span>feel the sound</span></h2>
                <p>Start with our picks for the best headphones below.<br/> These are the ones we recommend based on our testing <br/>and in-depth headphones reviews.</p>
                <button>Headphone</button>
            </div>
            <div className="img-banner">
                < img src = { banner } alt = "earbuds" / >
            </div>
        </div>
    );
};

export default Banner;