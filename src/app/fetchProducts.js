import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      const productsWithQty = data.products.map(product => ({ ...product, qty: 0 }));
      return productsWithQty; // Include qty for each product
    } catch (error) {
      throw new Error('Failed to fetch products: ' + error.message);
    }
  }
);


