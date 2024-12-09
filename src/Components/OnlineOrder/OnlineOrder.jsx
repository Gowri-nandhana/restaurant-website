import React from 'react'
import './OnlineOrder.css'
import  { useState } from "react";


function OnlineOrder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    orderDetails: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    // Perform form validation if needed
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.orderDetails
    ) {
      alert("Please fill all fields before placing the order.");
      return;
    }

    // Show the popup
    setShowPopup(true);

    // Optionally: Send the data to the backend here
    console.log("Order Data:", formData);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      orderDetails: "",
    });
  };

  return (
    <div className="order-page">
      <h2>Online Order</h2>
      <form className="order-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Delivery Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            placeholder="Enter your delivery address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="orderDetails">Order Details:</label>
          <textarea
            id="orderDetails"
            name="orderDetails"
            value={formData.orderDetails}
            onChange={handleChange}
            rows="5"
            placeholder="Enter your order details"
            required
          />
        </div>
        <button type="button" className='order-button' onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Order Successful!</h3>
            <p>Your order has been placed successfully. We will contact you shortly.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OnlineOrder;
