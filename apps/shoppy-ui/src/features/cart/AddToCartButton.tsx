import { Product } from 'shoppy-core';
import { useUpdateCartMutation } from './cartApiSlice';
import { useAppSelector } from '../../app/hooks';
import { selectCartId } from './cartSlice';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const id = useAppSelector(selectCartId);

  const [updateCart] = useUpdateCartMutation();
  const addProductToCartAsync = async (product: Product) => {
    await updateCart({ ...product, id });
  };

  return (
    <>
      <button
        type="submit"
        className="bg-indigo-600 border border-transparent flex focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium hover:bg-indigo-700 items-center justify-center py-3 rounded-md text-white w-full"
        onClick={async () => await addProductToCartAsync(product)}
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
