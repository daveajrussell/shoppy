import { Product } from 'shoppy-core';

interface AddToBagButtonProps {
  product: Product;
}

const AddToBagButton = ({ product }: AddToBagButtonProps) => {
  const addProductToBag = (product: Product) => {
    console.log(`adding ${product.sku} to bag`);
  };
  return (
    <>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => addProductToBag(product)}
      >
        Add to bag
      </button>
    </>
  );
};

export default AddToBagButton;
