import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { cartApiMiddleware, cartApiSlice } from '../features/cart/cartApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartSlice } from '../features/cart/cartSlice';

const rootReducer = combineSlices(cartSlice, cartApiSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(cartApiSlice.middleware)
        .concat(cartApiMiddleware);
    },
    preloadedState,
  });
  setupListeners(store.dispatch);
  return store;
};

const cartId: number = parseInt(localStorage.getItem('cartId') ?? '0') ?? 0;
const preloadedState = { cart: { id: cartId, products: [], total: 0 } };

export const store = makeStore(preloadedState);
