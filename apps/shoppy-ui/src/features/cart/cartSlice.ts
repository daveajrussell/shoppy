import { createSlice } from '@reduxjs/toolkit';

const initialState: CartSliceState = {
  id: 0,
};

interface CartSliceState {
  id: number;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: () => ({}),
  selectors: {
    selectCartId: (cart) => cart.id,
  },
});

export const { selectCartId } = cartSlice.selectors;
