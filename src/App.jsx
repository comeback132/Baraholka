import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import ContactInfopage from './pages/ContactInfopage';
import ShipmentInfopage from './pages/ShipmentInfopage';
import Ordersummarypage from './pages/Ordersummarypage';
import Notfoundpage from './pages/Notfoundpage';
import Layout from './components/Layout';
import CartLayout from './components/CartLayout'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="cart/" element={<CartLayout />}>
            <Route index element={<Cartpage />} />
            <Route path="contact-info" element={<ContactInfopage />} />
            <Route path="shipment-info" element={<ShipmentInfopage />} />
          </Route>
          <Route path="order" element={<Ordersummarypage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
