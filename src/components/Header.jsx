import React from 'react';
import womanTechnologist from '../../src/assets/images/woman-technologist.png';
const Header = () => {
    return (
        <header id="header" className="alt">
        <span><img src={womanTechnologist} alt="Woman Technologist" /></span>
        <h3>Hi! I am Anusha Venkataraghavan</h3>
        <p className='content'>Software Engineer | AWS Solution Architect Associate | Cloud Enthusiast</p>
    </header>
    )
}

export default Header;