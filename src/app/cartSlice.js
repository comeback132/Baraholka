import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './fetchProducts';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, qty } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex].qty += qty;
      } else {
        const newItem = { id, qty };
        state.items.push(newItem);
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1 && state.items[itemIndex].qty > 1) {
        state.items[itemIndex].qty--;
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.items[itemIndex].qty++;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      state.items[itemIndex].qty=0;
    },
    clearCart(state) {
      state.items.forEach(item => {
        item.qty = 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addToCart, decreaseQuantity, increaseQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
