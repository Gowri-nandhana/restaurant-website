import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Gallery from "../Gallery/Gallery";

function HomePage() {
  let navigate = useNavigate();

  return (
    <>
      <section>
        <div className="home-page">
          <div className="text">
            <h1>GRILL & GRILL</h1>
            <h2>Are you Hungry?</h2>
            <h1>Don't Wait....</h1>
            <p>Let's start order now!!</p>
            <button
              className="menu-button"
              onClick={() => {
                navigate("/Menu");
              }}
            >
              Go to menu
            </button>
<div>
            <button
              className="offer-button"
              onClick={() => {
                navigate("/Offer");
              }}
            >
              click here to view today's exciting offers
            </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <About />
      </section>

      <section>
        <Testimonial/>
      </section>

      <section>
        <Gallery/>
      </section>

     
      <section>
        <Contact />
      </section>
    </>
  );
}

export default HomePage;
