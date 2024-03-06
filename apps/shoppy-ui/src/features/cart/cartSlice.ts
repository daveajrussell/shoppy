import { createAppSlice } from '../../app/createAppSlice';

const initialState: CartSliceState = {
  id: 0,
};

interface CartSliceState {
  id: number;
}

export const cartSlice = createAppSlice({
  name: 'cart',
  initialState,
  reducers: () => ({}),
  selectors: {
    selectCartId: (cart) => cart.id,
  },
});

export const { selectCartId } = cartSlice.selectors;
