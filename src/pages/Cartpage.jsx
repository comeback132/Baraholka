import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from '../app/cartSlice';
import './Cartpage.css';

const CartPage = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('./contact-info');
  }
  const dispatch = useDispatch();
  const cartItems = useSelector((state) =>
    state.cart.items.filter((item) => item.qty > 0)
  );
  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalSum = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  return (
    <div className="cart-page-wrap">
      <h1>Cart</h1>
      <div className="cart-items-wrap">
        {cartItems.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <img className="cart-item-img" src={item.thumbnail} alt="item" />
            <div className="cart-item-wrap">
              <div className="top-wrap">
                <h3 className="item-title">{item.title}</h3>
                <button
                  className="delete-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <img src="https://i.ibb.co/Fh9p5C4/bin.png" alt="bin"/>
                  Delete
                </button>
              </div>
              <div className="buttom-wrap">
                <div className="btn-wrap">
                  <button
                    className="qty-btn"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  {item.qty}
                  <button
                    className="qty-btn"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="price-wrap">
                  <p>Price:</p>
                  <p className="price-tag">${item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total-wrap">
        <div className="total-sum-container">
          <div className="qty-products">
            <p className="left">Total Quantity:</p>
            <p className="right">{totalQuantity} products</p>
          </div>
          <div className="sum-products">
            <p className="left">Total Sum:</p>
            <p className="right">${totalSum}</p>
          </div>
        </div>
        <button onClick={handleClick} className="next-step-btn">Next Step</button>
      </div>
    </div>
  );
};

export default CartPage;
