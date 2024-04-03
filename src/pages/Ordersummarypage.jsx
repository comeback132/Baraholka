import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { clearCart } from '../app/cartSlice';
import { clearContactInfo } from '../app/contactInfoSlice';
import { clearShipmentInfo } from '../app/shipmentInfoSlice';
import { useSelector, useDispatch } from 'react-redux';
import './Ordersummarypage.css';
import { saveOrder } from '../app/orderSlice';

const Ordersummarypage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contactInfo = useSelector((state) => state.contactInfo);
  const shipmentInfo = useSelector((state) => state.shipmentInfo);
  const cartItems = useSelector((state) =>
    state.cart.items.filter((item) => item.qty > 0)
  );
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;
  const orderDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const orderNumber = 0;

  function handleClick() {
    const order = {
      cartItems: cartItems,
      contactInfo: contactInfo,
      shipmentInfo: shipmentInfo,
      subtotal: subtotal,
      tax: tax,
      grandTotal: grandTotal,
      orderDate: orderDate,
      orderNumber: orderNumber + 1,
      paddedOrderNumber: String(orderNumber + 1).padStart(9, '0'),
    };
    dispatch(saveOrder(order));
    dispatch(clearCart());
    dispatch(clearContactInfo());
    dispatch(clearShipmentInfo());
    navigate('../../');
  }

  return (
    <div className="page-wrap">
      <div className="thankyou-container">
      <img src="https://i.ibb.co/CH4fJzn/thank-you-tick.png" alt="thank-you-tick" />
        <h1>Thank you for your order!</h1>
        <p>
          The order confirmation email with details of your order and a link to
          track its progress has been sent to your email address.
        </p>
        <p className="order-number">Your order # is {orderNumber} - PENDING</p>
        <p className="order-date">Order Date: {orderDate}</p>
      </div>
      <div className="contact-shipment-wrap">
        <div className="contact-info small-container">
          <h4>
            <img
              src="https://i.ibb.co/r3vjmW3/contact-icon.png"
              alt="contact-icon"
            />
            Contact information
          </h4>
          <p>{contactInfo.firstname}</p>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
        </div>
        <div className="shipment-info small-container">
          <h4>
            <img
              src="https://i.ibb.co/pWy0tcs/shipment-icon.png"
              alt="shipment-icon"
            />
            Shipment information
          </h4>
          <p>{shipmentInfo.address}</p>
        </div>
      </div>
      <div className="order-summary-container">
        <div className="summary-inner-wrap">
          <h4>
          <img src="https://i.ibb.co/TvDYHPL/order-info-icon.png" alt="order-info-icon" />
            Order summary
            </h4>
          {cartItems.map((item) => (
            <div className="cart-item-card" key={item.id}>
              <img className="cart-item-img" src={item.thumbnail} alt="item" />
              <div className="cart-item-wrap">
                <div className="top-wrap">
                  <h3 className="item-title">{item.title}</h3>
                </div>
                <div className="buttom-wrap">
                  <div className="price-qty-container">
                    <p className="price">${item.price},</p>
                    <p className="qty">{item.qty} products</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="total-container">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <div className="shipping">
              <p>Shipping and Handling</p>
              <p>$0</p>
            </div>
            <div className="tax">
              <p>Tax</p>
              <p>${tax}</p>
            </div>
            <div className="grand-total">
              <p>Grand Total</p>
              <p>${grandTotal}</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="continue-btn">
        Continue shopping
      </button>
    </div>
  );
};

export default Ordersummarypage;
