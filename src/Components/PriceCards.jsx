import React from 'react'

const PriceCards = ({planName, price, features}) => {
    return (

        <div className="price-card">

            <div className="plan-name">{planName}</div>
            <div className="price">${price} / month</div>
            <ul className="features-list">
                {features.map((feature, index) => (
                    <li key={index} className={feature.available ? 'available' : 'not-available'}>
                        {feature.available ?
                            <span className="check-mark">&#10004;</span> :
                            <span className="cross-mark">&#10006;</span>}
                        <span className="feature-name">{feature.name}</span>
                    </li>
                ))}
            </ul>
            <button className="subscribe-button">Subscribe</button>
        </div>
    );
};

export default PriceCards
