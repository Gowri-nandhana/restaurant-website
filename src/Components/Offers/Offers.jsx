import React from "react";
import "./Offers.css";

function Offers() {
  const offers = [
    {
      id: 1,
      title: "Weekend Special: 20% Off!",
      description:
        "Enjoy a delightful weekend with a 20% discount on all dine-in orders. Offer valid from Friday to Sunday.",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-offer-post-design-template-849b9069fd618342e2592dd9992ee7b5_screen.jpg?ts=1591366091",
    },
    {
      id: 2,
      title: "Happy Hours: Buy 1 Get 1 Free",
      description:
        "Join us for happy hours from 3 PM to 6 PM and enjoy Buy 1 Get 1 Free on selected drinks and appetizers.",
      image: "https://img.freepik.com/premium-vector/buy-1-get-1-free-promotion-special-offer-colorful-banner-background_800769-16.jpg?w=2000",
    },
    {
      id: 3,
      title: "Family Feast: 25% Off",
      description:
        "Bring your family and get 25% off on all combo meals. Valid for groups of 4 or more.",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-offers-design-template-9755c79fd6cd3510238e2c246f09b430_screen.jpg?ts=1599490952",
    },
  ];

  return (
    <div className="offers-container">
      <h1 className="offers-title">Special Offers</h1>
      <div className="offers-list">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-description">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
