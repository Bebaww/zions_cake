// pages/Home.js
import React from 'react';
import Header from './header';
import Contact from './contact'; // Importing Contact for rendering
import './home.css';
import cakes from './9d2593780fe22eba7acf1ea6e9e57110.jpg';
import strawberry from './strawberrycheese.jpg';
import chocolate from './chocolate.jpg';
import purple from './purple ombre cake.jpg';
import birthday from './birthday.jpg';
import wedding from './wedding.jpg';
import romantic from './romantic.jpg';
import reveal from './reveal.jpg';

function Home() {
    return (
        <div className="home">
            <Header currentPage="home" />
            <h1>Welcome to Our Cake House!</h1>
            <p>Indulge in our delightful cakes, coffee, tea, and matcha.</p>

            <section className="gallery">
                <h1>Gallery</h1>
                <div className="scrollable-list">
                    {[cakes, strawberry, chocolate, purple, birthday, romantic, wedding, reveal].map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`Cake ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="what-we-serve">
                <h2>What We Serve</h2>
                <p>We offer a variety of cakes, drinks, and ice creams to satisfy your sweet cravings!</p>
            </section>

            <Contact />
        </div>
    );
}

export default Home;