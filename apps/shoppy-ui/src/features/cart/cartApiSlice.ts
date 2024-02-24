import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cart } from 'shoppy-core';

export const cartApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/cart' }),
  reducerPath: 'cartApi',
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<Cart, number>({
      query: (id: number = 0) => id.toString(),
      providesTags: (_, __, id) => [{ type: 'Cart', id }],
    }),
  }),
});

export const cartApiMiddleware = (_: any) => (next: any) => (action: any) => {
  if (action.type === 'cartApi/executeQuery/fulfilled') {
    localStorage.setItem('cartId', action.payload.id);
  }
  return next(action);
};

export const { useGetCartQuery } = cartApiSlice;
