import { Product } from 'shoppy-core';
import { createAppSlice } from '../../app/createAppSlice';

const initialState: CartSliceState = {
  id: 0,
  products: [],
  total: 0,
};

interface CartSliceState {
  id: number;
  products: Array<Product>;
  total: number;
}

export const cartSlice = createAppSlice({
  name: 'cart',
  initialState,
  reducers: () => ({
    setCartState: (state, action) => {
      state.products = action.payload.products;
      state.total = action.payload.total;
    },
    setCartProductState: (state, action) => {
      const product = state.products?.find(
        (product) => product.sku === action.payload.product.sku,
      );
      if (product) product.quantity = action.payload.quantity;
    },
  }),
  selectors: {
    selectCart: (cart) => cart,
    selectCartId: (cart) => cart.id,
  },
});

export const { setCartState, setCartProductState } = cartSlice.actions;
export const { selectCart, selectCartId } = cartSlice.selectors;
