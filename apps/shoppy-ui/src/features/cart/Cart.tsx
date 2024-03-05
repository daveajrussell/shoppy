import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import ModalDialog from '../../components/ModalDialog';
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} from './cartApiSlice';
import { selectCartId, selectCart, setCartProductState } from './cartSlice';
import { Product } from 'shoppy-core';
import { useDispatch } from 'react-redux';
import { setCartState } from './cartSlice';
import { debounce } from 'lodash';

const Cart = () => {
  const [open, setOpen] = useState(false);
  const id = useAppSelector(selectCartId);
  const cart = useAppSelector(selectCart);
  const { data, isError, isLoading, isSuccess } = useGetCartQuery(id);

  const [removeFromCart] = useRemoveFromCartMutation();
  const [updateCart] = useUpdateCartMutation();

  const removeProductFromCartAsync = async (product: Product) => {
    await removeFromCart({ sku: product.sku, id: id });
  };

  const updateProductInCartAsync = async (product: Product) => {
    await updateCart({ ...product, id });
  };

  const cartData = data;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!cartData) return;
    dispatch(setCartState(cartData));
  }, [dispatch, cartData]);

  const handleChange = async (product: Product, quantity: number) => {
    dispatch(setCartProductState({ product, quantity }));
    await updateProductInCartAsync({ ...product, quantity: quantity });
  };

  const debouncedOnChange = debounce(handleChange, 500);

  function getCartText(): string {
    if (isSuccess && cart) {
      if (cart.products.length > 0) return `Cart (${cart.products.length})`;
    }
    return 'Cart';
  }

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isSuccess && cart) {
    return (
      <>
        <button onClick={() => setOpen(true)}>{getCartText()}</button>
        <ModalDialog title="Shopping cart" open={open} setOpen={setOpen}>
          <div className="divide-y divide-dashed">
            <div className="mt-4">
              <div>
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cart.products.map((product) => (
                    <li key={product.sku} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.imageSrc}
                          alt={product.description}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{product.name}</h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty{' '}
                            <input
                              type="number"
                              className="w-12"
                              defaultValue={product.quantity}
                              onChange={(e) =>
                                debouncedOnChange(
                                  product,
                                  Number(e.target.value),
                                )
                              }
                            ></input>
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={async () =>
                                await removeProductFromCartAsync(product)
                              }
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <div className="mt-4">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>Subtotal</h3>
                  <p className="ml-4">${cart.total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  type="submit"
                  className="mt-4 bg-indigo-600 border border-transparent flex focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium hover:bg-indigo-700 items-center justify-center py-3 rounded-md text-white w-full"
                >
                  Continue to checkout
                </button>
              </div>
            </div>
          </div>
        </ModalDialog>
      </>
    );
  }
};

export default Cart;
