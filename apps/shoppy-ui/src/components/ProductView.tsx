import QuickViewButton from './QuickViewButton';
import { Product } from 'shoppy-core';

interface ProductProps {
  product: Product;
}

const ProductView = ({ product }: ProductProps) => {
  return (
    <>
      <div className="group relative flex flex-col-reverse">
        <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
          <img
            srcSet={product.imageSrc}
            alt={product.description}
            className="object-cover object-center"
          />
          <div className="flex items-end p-4">
            <QuickViewButton product={product}></QuickViewButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
