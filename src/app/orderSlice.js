
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [], 
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    saveOrder(state, action) {
      const order = action.payload; 
      state.orders.push(order); 
    },
  },
});

export const { saveOrder } = orderSlice.actions;
export default orderSlice.reducer;
