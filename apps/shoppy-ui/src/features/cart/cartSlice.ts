import { createAppSlice } from '../../app/createAppSlice';
import { PayloadAction } from '@reduxjs/toolkit/react';

const initialState: CartSliceState = {
  id: 0,
};

interface CartSliceState {
  id: number;
}

export const cartSlice = createAppSlice({
  name: 'cart',
  initialState,
  reducers: (create) => ({
    setCartId: create.reducer((cart, action: PayloadAction<number>) => {
      cart.id = action.payload;
    }),
  }),
  selectors: {
    selectCartId: (cart) => cart.id,
  },
});
export const { setCartId } = cartSlice.actions;
export const { selectCartId } = cartSlice.selectors;
