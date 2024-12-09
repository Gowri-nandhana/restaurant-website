import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section class="contact-section">
        <div class="contact-container">
          <div class="contact-info">
            <h2>Contact Us</h2>
            <p>
              We’d love to hear from you! Whether you want to make a
              reservation, ask about the menu, or give us feedback, we’re here
              for you.
            </p>
            <div class="contact-details">
              <div class="contact-item">
                <h3>Address</h3>
                <p>123 Flavor Street, Culinary City, Foodland</p>
              </div>
              <div class="contact-item">
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              <div class="contact-item">
                <h3>Email</h3>
                <p>info@flavorsandaroma.com</p>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h3>Send Us a Message</h3>
            <form action="#" method="POST">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* <div class="map-container">
          <h3>Find Us Here</h3>
          <div id="map"></div>
        </div> */}
      </section>
    </div>
  );
}

export default Contact;
