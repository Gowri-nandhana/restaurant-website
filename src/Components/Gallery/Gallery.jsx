import React from "react";
import './Gallery.css'

function Gallery() {
  return (
    <div>
      <section class="gallery-section">
        <div class="gallery-container">
          <h2>Our Gallery</h2>
          <p>
            Take a glimpse into the delicious dishes and warm ambiance we offer.
          </p>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="https://www.kissthecookcatering.com/wp-content/uploads/2018/01/Restaurant-Plates-104704117_4288x2848-scaled.jpeg" alt="Delicious Dish 1" />
            </div>
            <div class="gallery-item">
              <img src="http://www.dineout.co.in/blog/wp-content/uploads/2018/02/shutterstock_369523526-700x482.jpg" alt="Delicious Dish 2" />
            </div>
            <div class="gallery-item">
              <img src="https://media.architecturaldigest.com/photos/572a34ffe50e09d42bdfb5e0/master/pass/japanese-restaurants-la-01.jpg" alt="Delicious Dish 3" />
            </div>
            <div class="gallery-item">
              <img src="https://thearchitectsdiary.com/wp-content/uploads/2018/06/Best-Restaurant-Interior-Design-In-India-3.jpg" alt="Restaurant Interior" />
            </div>
            <div class="gallery-item">
              <img src="https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg" alt="Delicious Dish 5" />
            </div>
            <div class="gallery-item">
              <img src="https://tse3.mm.bing.net/th?id=OIP.2PYrFyzDKmM7DXizioW1sAHaE7&pid=Api&P=0&h=180" alt="Delicious Dish 6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
