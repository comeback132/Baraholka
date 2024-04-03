import React, { useEffect } from 'react';
import { fetchProducts } from '../app/fetchProducts';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="layout">
      <header className="header">
        <NavLink className="logo-link" to="/">
        <img src="https://i.ibb.co/x8n0H9V/Logo.png" alt="Logo" />
          Baraholka
        </NavLink>
        <NavLink to="/cart">
          <button className="cart-btn">
          <img src="https://i.ibb.co/MCzkWQ7/cart.png" alt="cart" border="0"/>
            Cart</button>
          <div className="badge-counter">{totalQuantity}</div> {/* Display total quantity */}
        </NavLink>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

