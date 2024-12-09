import React from "react";
import './Testimonial.css'

function Testimonial() {
  return (
    <div>
      <section class="testimonials-section">
        <div class="testimonials-container">
          <h2>What Our Customers Say</h2>
          <p>
            Our customers love dining with us. Here's what they have to say:
          </p>
          <div class="testimonials-list">
            <div class="testimonial-item">
              <img src="http://www.usnews.com/cmsmedia/7c/65/5feb1816423dbf2602999815a2db/161227-businessman-stock.jpg" alt="Customer 1" />
              <p class="testimonial-text">
                "The food was absolutely amazing! The service was quick and the
                atmosphere was perfect for a family dinner."
              </p>
              <h3>Jane Doe</h3>
              <span>Regular Customer</span>
            </div>

            <div class="testimonial-item">
              <img src="https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg" alt="Customer 2" />
              <p class="testimonial-text">
                "This is hands down the best restaurant in town. Every dish is a
                masterpiece, and the staff is incredibly friendly."
              </p>
              <h3>John Smith</h3>
              <span>Food Blogger</span>
            </div>

            <div class="testimonial-item">
              <img src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=6&m=1009749608&s=612x612&w=0&h=ckLkBgedCLmhG-TBvm48s6pc8kBfHt7Ppec13IgA6bo=" alt="Customer 3" />
              <p class="testimonial-text">
                "From appetizers to dessert, everything was delightful. I can’t
                wait to come back!"
              </p>
              <h3>Emily Brown</h3>
              <span>Happy Customer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
