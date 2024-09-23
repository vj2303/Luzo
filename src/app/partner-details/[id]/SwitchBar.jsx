'use client'
import React, { useState, useEffect } from 'react';

const SwitchBar = () => {
    // Initialize activeSection with 'services' as the default active section
    const [activeSection, setActiveSection] = useState('services');

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id); // Set the active section for styling
        }
    };

    // Optional: Update the active section based on scroll position
    useEffect(() => {
        const handleScrollEvent = () => {
            const sections = ['services', 'photos', 'about', 'reviews'];
            let currentSection = '';

            sections.forEach(section => {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= 200) {
                    currentSection = section; // Update current section based on scroll
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, []);

    return (
        <div className='bg-slate-50 border-b'>
            <ul className="flex justify-between sm:max-w-[1400px] mx-auto sm:text-[20px] px-[10px] mt-6 py-[16px]">
                <li onClick={() => handleScroll('services')}
                    className={`cursor-pointer ${activeSection === 'services' ? 'text-[#4169e1] font-bold underline' : 'text-gray-500'}`}>
                    Services
                </li>
                <li onClick={() => handleScroll('photos')}
                    className={`cursor-pointer ${activeSection === 'photos' ? 'text-black font-bold underline' : 'text-gray-500'}`}>
                    Photos
                </li>
                <li onClick={() => handleScroll('about')}
                    className={`cursor-pointer ${activeSection === 'about' ? 'text-black font-bold underline' : 'text-gray-500'}`}>
                    About
                </li>
                <li onClick={() => handleScroll('reviews')}
                    className={`cursor-pointer ${activeSection === 'reviews' ? 'text-black font-bold underline' : 'text-gray-500'}`}>
                    Reviews
                </li>
            </ul>
        </div>
    );
};

export default SwitchBar;
