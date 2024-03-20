import { Cart, Product } from 'shoppy-core';
import { apiSlice } from './api/createApi';

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<Cart, number>({
      query: (id: number = 0) => 'cart/' + id.toString(),
      providesTags: (_, __, id) => [{ type: 'Cart', id }],
    }),
    updateCart: builder.mutation<Cart, Partial<Product> & Pick<Cart, 'id'>>({
      query: ({ id, ...product }) => ({
        url: `cart/${id?.toString() ?? ''}`,
        method: 'PATCH',
        body: product,
      }),
      invalidatesTags: ['Cart'],
    }),
    removeFromCart: builder.mutation<
      Cart,
      Pick<Product, 'sku'> & Pick<Cart, 'id'>
    >({
      query: ({ id, sku }) => ({
        url: `cart/${id?.toString() ?? ''}/${sku ?? ''}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const cartApiMiddleware = (_: any) => (next: any) => (action: any) => {
  if (action.type === 'api/executeQuery/fulfilled' && action.payload?.id) {
    localStorage.setItem('cartId', action.payload.id);
  }
  return next(action);
};

export const {
  useGetCartQuery,
  useUpdateCartMutation,
  useRemoveFromCartMutation,
} = cartApiSlice;
