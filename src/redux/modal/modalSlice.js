import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    isOpen: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const modalReducer = modalSlice.reducer;
