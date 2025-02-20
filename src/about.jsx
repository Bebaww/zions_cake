// pages/About.js
import React from 'react';
import Header from './header';
import Contact from './contact'; // Importing Contact for rendering
import './about.css';

function About() {
    return (
        <div className="about">
            <Header currentPage="about" />
            <h1>About Us</h1>
            <p>We are passionate about baking and serving delicious cakes and drinks. Our mission is to bring joy through our sweet creations.</p>
            <p>Join us for a delightful experience!</p>

            <Contact /> {/* Directly rendering the Contact page */}
        </div>
    );
}

export default About;
