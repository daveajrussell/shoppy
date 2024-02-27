import { Product } from 'shoppy-core';
import { useAddToCartMutation } from './cartApiSlice';
import { useAppSelector } from '../../app/hooks';
import { selectCartId } from './cartSlice';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const id = useAppSelector(selectCartId);
  const [addToCart] = useAddToCartMutation();
  const addProductToCartAsync = async (product: Product) => {
    await addToCart({ ...product, id });
  };
  return (
    <>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={async () => await addProductToCartAsync(product)}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
