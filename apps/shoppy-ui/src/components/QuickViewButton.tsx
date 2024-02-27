import { useState } from 'react';
import { Product } from 'shoppy-core';
import ModalDialog from './ModalDialog';
import AddToCartButton from '../features/cart/AddToCartButton';

interface QuickViewProps {
  product: Product;
}

const QuickViewButton = ({ product }: QuickViewProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="relative z-10 w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100"
        onClick={() => setOpen(true)}
      >
        Quick View
        <span className="sr-only">{product.name}</span>
      </button>
      <ModalDialog open={open} setOpen={setOpen}>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
            <img
              src={product.imageSrc}
              alt={product.description}
              className="object-cover object-center"
            />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
              {product.name}
            </h2>

            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>

              <p className="text-xl text-gray-900">{product.description}</p>

              <p className="text-2xl text-gray-900">${product.price}</p>
            </section>

            <section aria-labelledby="options-heading" className="mt-10">
              <h3 id="options-heading" className="sr-only">
                Product options
              </h3>

              <AddToCartButton product={product}></AddToCartButton>
            </section>
          </div>
        </div>
      </ModalDialog>
    </>
  );
};

export default QuickViewButton;
