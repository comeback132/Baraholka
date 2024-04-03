import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import contactReducer from './contactInfoSlice'
import shipmentReducer from './shipmentInfoSlice'
import orderReducer from './orderSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    contactInfo: contactReducer,
    shipmentInfo: shipmentReducer,
    order:orderReducer,
  },
  
});
const unsubscribe = store.subscribe(() => {
  // Callback function that logs the updated state to the console
  const state = store.getState();
  console.log('Updated state:', state);
});

export default store

