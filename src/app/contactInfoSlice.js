import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
};

const contactInfoSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    storeContactInfo(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearContactInfo(state) {
      return initialState;
    },
  },
});

export const { storeContactInfo, clearContactInfo } =
  contactInfoSlice.actions;
export default contactInfoSlice.reducer;
