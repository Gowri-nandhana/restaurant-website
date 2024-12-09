import React, { useState } from "react";
import "./Reservation.css";

function SeatReservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.date.trim()) errors.date = "Reservation date is required.";
    if (!formData.time.trim()) errors.time = "Reservation time is required.";
    if (!formData.guests.trim()) {
      errors.guests = "Number of guests is required.";
    } else if (isNaN(formData.guests) || formData.guests <= 0) {
      errors.guests = "Enter a valid number of guests.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setShowPopup(true);

      // Optionally send data to backend here
      console.log("Reservation Data:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
      });
    }
  };

  return (
    <div className="reservation-container">
      <h2 className="reservation-title">Reserve a Table</h2>
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="reservation-form-group">
          <label htmlFor="name" className="reservation-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="reservation-input"
          />
          {formErrors.name && <span className="reservation-error">{formErrors.name}</span>}
        </div>

        <div className="reservation-form-group">
          <label htmlFor="email" className="reservation-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="reservation-input"
          />
          {formErrors.email && <span className="reservation-error">{formErrors.email}</span>}
        </div>

        <div className="reservation-form-group">
          <label htmlFor="phone" className="reservation-label">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="reservation-input"
          />
          {formErrors.phone && <span className="reservation-error">{formErrors.phone}</span>}
        </div>

        <div className="reservation-form-group">
          <label htmlFor="date" className="reservation-label">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="reservation-input"
          />
          {formErrors.date && <span className="reservation-error">{formErrors.date}</span>}
        </div>

        <div className="reservation-form-group">
          <label htmlFor="time" className="reservation-label">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="reservation-input"
          />
          {formErrors.time && <span className="reservation-error">{formErrors.time}</span>}
        </div>

        <div className="reservation-form-group">
          <label htmlFor="guests" className="reservation-label">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Enter the number of guests"
            className="reservation-input"
          />
          {formErrors.guests && <span className="reservation-error">{formErrors.guests}</span>}
        </div>

        <button type="submit" className="reservation-button">Reserve Now</button>
      </form>

      {showPopup && (
        <div className="reservation-popup">
          <div className="reservation-popup-content">
            <h3 className="popup-title">Reservation Successful!</h3>
            <p className="popup-message">Your reservation has been confirmed. We look forward to serving you!</p>
            <button className="popup-button" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeatReservation;
