import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryDetails from "./Components/CategoryDetails/CategoryDetails";
import { Provider } from "react-redux";
import { reduxStore } from "./Components/Redux/Redux";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import OnlineOrder from "./Components/OnlineOrder/OnlineOrder";
import Reservation from "./Components/Reservation/Reservation";
import Offers from "./Components/Offers/Offers";


function App() {
  return (
    <div>
      <Provider store={reduxStore}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Menu" element={<Home />} />
            <Route path="/CategoryDetails" element={<CategoryDetails />} />
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/OnlineOrder" element={<OnlineOrder/>}/>
            <Route path="/Reservation" element={<Reservation/>}/>
            <Route path="/Offer" element={<Offers/>}/>
          </Routes>
        </BrowserRouter>
        </Provider>
      
    </div>
  );
}

export default App;
