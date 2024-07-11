// src/components/HeaderLogoTransition.jsx
import React, { useState, useEffect } from 'react';
import '../HeaderLogoTransition.css';
import logo from '../assets/logo.png';

const HeaderLogoTransition = () => {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className={`logo ${shrink ? 'shrink' : ''}`}>
                <img src={logo} alt="Logo" className="logo-img" />
            </div>
        </header>
    );
};

export default HeaderLogoTransition;
