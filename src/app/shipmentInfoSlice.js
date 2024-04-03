import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  apartment: '',
  city: '',
  country: '',
  state: '',
  zip: '',
};

const shipmentInfoSlice = createSlice({
  name: 'shipmentInfo',
  initialState,
  reducers: {
    storeShipmentInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearShipmentInfo(state) {
      return initialState;
    },
  },
});

export const { storeShipmentInfo, clearShipmentInfo } = shipmentInfoSlice.actions;
export default shipmentInfoSlice.reducer;
