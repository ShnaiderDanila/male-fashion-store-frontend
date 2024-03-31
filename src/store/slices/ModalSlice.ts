import { createSlice } from '@reduxjs/toolkit';

// Actions
export interface IModalSliceState {
  isOpen: boolean;
}

const initialState: IModalSliceState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal: (state) => {
      state.isOpen = false;
      document.body.style.overflow = 'auto';
    },
  },
});

// Reducer
export const modalReducer = modalSlice.reducer;

// Actions
export const { openModal, closeModal } = modalSlice.actions;
