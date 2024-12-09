import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css'
import { useNavigate } from 'react-router-dom';


function Cart() {
  const cartItems = useSelector(state => state.cart.items);
 let navigate=useNavigate()

 
  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.idCategory}>
              <img src={item.strCategoryThumb} alt="" />
              <div>
                <h2>{item.strCategory}</h2>
                <button className='remove-btn'>Remove</button>
                <button className='order-btn' onClick={()=>{navigate('/OnlineOrder')}}>Order Now</button>
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
