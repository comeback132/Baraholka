import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Layout.css';

const CartLayout = () => {
  const cartItems = useSelector((state) => state.cart.items.qty);
  const contactInfo = useSelector((state) => state.contactInfo);
  return (
    <div className="outlet-container">
      <nav className="cart-nav-panel">
        <NavLink
          className="nav-link"
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? '#00AE1C' : '#243573',
          })}
        >
          Cart
        </NavLink>
        &gt;
        <NavLink
          className="nav-link"
          to="/cart/contact-info"
          style={({ isActive }) => ({
            color: isActive ? '#00AE1C' : '#243573',
          })}
        >
          Contact information
        </NavLink>
        &gt;
        <NavLink
          className="nav-link"
          to="/cart/shipment-info"
          style={({ isActive }) => ({
            color: isActive ? '#00AE1C' : '#243573',
          })}
        >
          Shipment information
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default CartLayout;
