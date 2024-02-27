import { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import ModalDialog from '../../components/ModalDialog';
import { useGetCartQuery } from './cartApiSlice';
import { selectCartId } from './cartSlice';

const Cart = () => {
  const cartId = useAppSelector(selectCartId);
  const { data, isError, isLoading, isSuccess } = useGetCartQuery(cartId);
  const [open, setOpen] = useState(false);

  function getCartText(): string {
    if (isSuccess && data) {
      if (data.products.length > 0) return `Cart (${data.products.length})`;
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
  if (isSuccess) {
    return (
      <>
        <button onClick={() => setOpen(true)}>{getCartText()}</button>
        <ModalDialog open={open} setOpen={setOpen}>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {data.products.map((product) => (
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
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
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
        </ModalDialog>
      </>
    );
  }
};

export default Cart;
