// pages/Menu.js
import React from 'react';
import Header from './header';
import Contact from './contact';
import './menu.css';

import cakep from './9d2593780fe22eba7acf1ea6e9e57110.jpg';
import espresso from './esperesso.jpg';
import cappuccino from './caputtiono.jpg';
import latte from './macha latte.jpg';
import americano from './ammericano.jpg';
import chocolate from './chocolate.jpg';
import strawberry from './strawberrycheese.jpg';
import purple from './purple ombre cake.jpg';
import vanilla from './vannela.jpg';
import chocolateIce from './chocolate ice cream.jpg';

// Sample menu data
const drinks = [
    { name: "Espresso", ingredients: "Coffee beans, Water", price: "$3.00", image: espresso },
    { name: "Matcha Latte", ingredients: "Matcha powder, Milk, Sugar", price: "$4.50", image: latte },
    { name: "Americano", ingredients: "Coffee, Water", price: "$3.50", image: americano },
    { name: "Cappuccino", ingredients: "Espresso, Milk, Foam", price: "$4.00", image: cappuccino },
    { name: "Latte", ingredients: "Espresso, Steamed Milk", price: "$4.00", image: cakep }
];

const cakes = [
    { name: "Chocolate Cake", ingredients: "Flour, Cocoa, Sugar, Eggs", price: "$5.00", image: chocolate },
    { name: "Strawberry Cheese Cake", ingredients: "Flour, Sugar, Eggs, Strawberry", price: "$4.50", image: strawberry },
    { name: "Purple Ombre Cake", ingredients: "Flour, Sugar, Eggs, Berries, Colorant", price: "$4.50", image: purple }
];

const iceCreams = [
    { name: "Vanilla", ingredients: "Milk, Cream, Sugar, Vanilla", price: "$2.50", image: vanilla },
    { name: "Chocolate", ingredients: "Milk, Cream, Cocoa, Sugar", price: "$2.50", image: chocolateIce }
];

function Menu() {
    return (
        <div className="menu">
            <Header currentPage="menu" />
            <h1>Our Menu</h1>

            <section className="menu-category">
                <h2>Drinks</h2>
                <div className="scrollable-list">
                    {drinks.map((drink, index) => (
                        <div key={index} className="menu-item">
                            <img src={drink.image} alt={drink.name} />
                            <h3>{drink.name}</h3>
                            <p>Ingredients: {drink.ingredients}</p>
                            <p>Price: {drink.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="menu-category">
                <h2>Cakes</h2>
                <div className="scrollable-list">
                    {cakes.map((cake, index) => (
                        <div key={index} className="menu-item">
                            <img src={cake.image} alt={cake.name} />
                            <h3>{cake.name}</h3>
                            <p>Ingredients: {cake.ingredients}</p>
                            <p>Price: {cake.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="menu-category">
                <h2>Ice Creams</h2>
                <div className="scrollable-list">
                    {iceCreams.map((iceCream, index) => (
                        <div key={index} className="menu-item">
                            <img src={iceCream.image} alt={iceCream.name} />
                            <h3>{iceCream.name}</h3>
                            <p>Ingredients: {iceCream.ingredients}</p>
                            <p>Price: {iceCream.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Contact />
        </div>
    );
}

export default Menu;
