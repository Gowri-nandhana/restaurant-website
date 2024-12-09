import React from 'react'
import './About.css'
import { useNavigate } from 'react-router-dom'
function About() {

  let navigate= useNavigate()
  return (
    <div>
      <div class="about-container">
    <div class="about-image">
      <img src="https://wallpaperaccess.com/full/767082.jpg" alt="" />
    </div>
    <div class="about-content">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>Grill & Grill</strong>, where every meal tells a story! Established in 2005, we’ve been serving 
        delightful dishes crafted with love and passion. Our restaurant is a perfect blend of tradition and innovation, offering a 
        culinary experience that’s both comforting and exciting.
      </p>
      <p>
        At <strong>Grill & Grill</strong>, we believe in using fresh, locally-sourced ingredients to create dishes that 
        celebrate the vibrant flavors of [Cuisine Type/Local Area]. From our signature [Dish Name] to our mouthwatering [Dish Name], 
        every plate is a masterpiece designed to please your palate.
      </p>
      <p>
        Join us for a memorable dining experience where you’re not just a customer but a part of our family. Let’s make memories 
        over great food and heartfelt hospitality.
      </p>
      <button className="reserve-btn" onClick={()=>{navigate('/Reservation')}}>Reservation</button>
    </div>
  </div>
    </div>
  )
}

export default About
